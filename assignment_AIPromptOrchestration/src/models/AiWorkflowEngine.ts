import { AiWorkflowStep } from "./AiWorkflowStep";
import { StepExecutionContext } from "./StepExecutionContext";
import { Logger } from "../utils/Logger";

export class AiWorkflowEngine {

  private workflowSteps: {
    workflowStep: AiWorkflowStep;
    context: StepExecutionContext;
  }[] = [];

  public addWorkflowStep(
    workflowStep: AiWorkflowStep,
    context: StepExecutionContext = {}
  ): void {
    this.workflowSteps.push({ workflowStep, context });
  }

  public async executeWorkflow(initialInput: string): Promise<string> {
    let currentOutput = initialInput;

    for (const { workflowStep, context } of this.workflowSteps) {

      if (context.executionCondition && !context.executionCondition(currentOutput)) {
        continue;
      }

      try {
        currentOutput = await this.executeStepWithRetry(
          workflowStep,
          currentOutput,
          context
        );
      } catch (error) {

        Logger.logInfo(`Step execution failed: ${String(error)}`);

        if (context.fallbackStep) {
          Logger.logInfo("Executing fallback step...");
          currentOutput = await context.fallbackStep.processStep(currentOutput, {});
        } else {
          throw error;
        }
      }
    }

    return currentOutput;
  }

  private async executeStepWithRetry(
    workflowStep: AiWorkflowStep,
    input: string,
    context: StepExecutionContext
  ): Promise<string> {

    let remainingRetries = context.retryAttempts ?? 0;

    while (true) {
      try {
        return await workflowStep.processStep(input, context);
      } catch (error) {

        if (remainingRetries <= 0) {
          throw error;
        }

        remainingRetries--;
        Logger.logInfo("Retrying step execution...");
      }
    }
  }
}