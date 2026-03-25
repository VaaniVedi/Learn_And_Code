import { StepExecutionContext } from "./StepExecutionContext";

export interface AiWorkflowStep {
  processStep(input: string, context: StepExecutionContext): Promise<string>;
}