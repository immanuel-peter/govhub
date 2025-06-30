import { billTypeAliases } from "./billTypeAliases";
import { actionTypeAliases } from "./actionTypeAliases";

export const getBillTypeAlias = (billType: string) => {
  const alias =
    billTypeAliases[billType.toLowerCase() as keyof typeof billTypeAliases];
  return alias || billType;
};

export const getActionTypeAlias = (actionType: string) => {
  const alias =
    actionTypeAliases[
      actionType.toLowerCase() as keyof typeof actionTypeAliases
    ];
  return alias || actionType;
};
