import { Creator } from "./models/Creator";
import { AdsEarningStrategy } from "./strategies/AdsEarningStrategy";
import { SubscriptionEarningStrategy } from "./strategies/SubscriptionEarningStrategy";
import { BrandDealEarningStrategy } from "./strategies/BrandDealEarningStrategy";

const creator = new Creator("Vaani");

creator.addEarningStrategy(new AdsEarningStrategy(10000));
creator.addEarningStrategy(new SubscriptionEarningStrategy(500));
creator.addEarningStrategy(new BrandDealEarningStrategy(2000));

creator.displayEarnings();