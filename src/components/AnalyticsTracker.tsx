
import { useAnalytics } from "@/hooks/useAnalytics";

// This component doesn't render anything, it just tracks analytics
const AnalyticsTracker = () => {
  useAnalytics();
  return null;
};

export default AnalyticsTracker;
