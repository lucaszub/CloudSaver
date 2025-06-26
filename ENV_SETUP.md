# How to configure the .env file for Azure Cost Management

To connect the application to Azure APIs, you need a `.env` file with your secure credentials.

## Example `.env` file

```env
CLIENT_ID=your-azure-client-id
CLIENT_SECRET=your-azure-client-secret
TENANT_ID=your-azure-tenant-id
SUBSCRIPTION_ID=your-azure-subscription-id
```

## How to obtain these values

### 1. Register an application in Microsoft Entra ID (Azure AD)

- Follow the official Azure guide:  
  https://learn.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app
- You will get:
  - **CLIENT_ID**: Application (client) ID
  - **TENANT_ID**: Directory (tenant) ID

### 2. Create a client secret

- Official guide:  
  https://learn.microsoft.com/en-us/azure/active-directory/develop/howto-add-app-roles-in-azure-ad-apps#add-credentials
- You will get:
  - **CLIENT_SECRET**: The value of the client secret

### 3. Authorize the Cost Management API

- Official guide:  
  https://learn.microsoft.com/en-us/azure/cost-management-billing/automate/cost-management-api-permissions

### 4. Assign the "Reader" role to the application on your subscription

- Official guide:  
  https://learn.microsoft.com/en-us/azure/role-based-access-control/role-assignments-portal

### 5. Find your Azure Subscription ID

- Official guide:  
  https://learn.microsoft.com/en-us/azure/cost-management-billing/manage/view-all-accounts#find-your-subscription-id
- You will get:
  - **SUBSCRIPTION_ID**: Your Azure subscription ID

> **Important:**
> Never share your `.env` file. It contains sensitive information.
