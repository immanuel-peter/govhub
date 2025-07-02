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
    return `${congress}st Congress`;
  } else if (congress % 10 == 2) {
    return `${congress}nd Congress`;
  } else if (congress % 10 == 3) {
    return `${congress}rd Congress`;
  } else {
    return `${congress}th Congress`;
  }
};
