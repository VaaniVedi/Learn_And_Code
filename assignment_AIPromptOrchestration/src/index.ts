import { AiWorkflowEngine } from "./models/AiWorkflowEngine";
import { GenerateContentStep } from "./steps/GenerateContentStep";
import { SummarizeContentStep } from "./steps/SummarizeContentStep";
import { TranslateContentStep } from "./steps/TranslateContentStep";

async function main(): Promise<void> {

  const workflowEngine = new AiWorkflowEngine();

  workflowEngine.addWorkflowStep(new GenerateContentStep());

  workflowEngine.addWorkflowStep(new SummarizeContentStep(), {
    retryAttempts: 2
  });

  workflowEngine.addWorkflowStep(new TranslateContentStep(), {
    executionCondition: (input: string) => input.length > 0
  });

  const finalOutput = await workflowEngine.executeWorkflow("Product description");

  console.log("\nFinal Output:", finalOutput);
}

main();