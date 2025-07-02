import { billTypeAliases } from "./billTypeAliases";
import { actionTypeAliases } from "./actionTypeAliases";

export const getBillTypeAlias = (billType?: string): string => {
  if (typeof billType !== "string") return "";

  const alias =
    billTypeAliases[billType.toLowerCase() as keyof typeof billTypeAliases];

  return alias || billType;
};

export const getActionTypeAlias = (actionType?: string): string => {
  if (typeof actionType !== "string") return "";

  const alias =
    actionTypeAliases[
      actionType.toLowerCase() as keyof typeof actionTypeAliases
    ];

  return alias || actionType;
};

export const formatCongress = (congress: number) => {
  if (congress % 10 == 1) {
    if (congress % 100 == 11) {
      return `${congress}th Congress`;
    } else {
      return `${congress}st Congress`;
    }
  } else if (congress % 10 == 2) {
    if (congress % 100 == 12) {
      return `${congress}th Congress`;
    } else {
      return `${congress}nd Congress`;
    }
  } else if (congress % 10 == 3) {
    if (congress % 100 == 13) {
      return `${congress}th Congress`;
    } else {
      return `${congress}rd Congress`;
    }
  } else {
    return `${congress}th Congress`;
  }
};

export const getRelativeTime = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 1) return "1 day ago";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 14) return "1 week ago";
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 60) return "1 month ago";
  return `${Math.floor(diffDays / 30)} months ago`;
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};
