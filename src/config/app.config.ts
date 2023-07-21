interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Content Creator'],
  customerRoles: [],
  tenantRoles: ['Content Creator'],
  tenantName: 'Organization',
  applicationName: 'dating app',
  addOns: ['chat', 'file', 'notifications'],
};
