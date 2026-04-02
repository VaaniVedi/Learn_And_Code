import { AiWorkflowStep } from "./AiWorkflowStep"

export interface StepExecutionContext {
  retryAttempts?: number;
  fallbackStep?: AiWorkflowStep;
  executionCondition?: (input: string) => boolean;
}