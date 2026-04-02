import { AiWorkflowStep } from "../models/AiWorkflowStep";
import { StepExecutionContext } from "../models/StepExecutionContext";

export class TranslateContentStep implements AiWorkflowStep {

  public async processStep(
    input: string,
    context: StepExecutionContext
  ): Promise<string> {
    return `Translated: ${input}`;
  }
}