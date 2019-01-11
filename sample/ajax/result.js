
// 说明
export function GetAccountList(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Account/GetAccountList',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetAccountDetailById(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Account/GetAccountDetailById',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetAccountRoleAndOrg(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Account/GetAccountRoleAndOrg',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function EditAccount(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Account/EditAccount',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function EditOrgAndRole(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Account/EditOrgAndRole',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function ChangeCorePassWord(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Account/ChangeCorePassWord',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetCorePassWord(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Account/GetCorePassWord',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function BatchImportAccount(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Account/BatchImportAccount',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function SingleAccountAdd(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Account/SingleAccountAdd',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function DisableAccountCheck(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Account/DisableAccountCheck',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function DisableAccount(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Account/DisableAccount',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function LoadFromService(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Account/LoadFromService',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function AddAdjustment(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Adjustment/AddAdjustment',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function AddTempAdjustment(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Adjustment/AddTempAdjustment',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function AddDeclineAdjustment(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Adjustment/AddDeclineAdjustment',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetAdjustmentById(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Adjustment/GetAdjustmentById',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function AddNewAdjustment(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Adjustment/AddNewAdjustment',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function ApprovedCompensateInfo(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Adjustment/ApprovedCompensateInfo',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function DeleteAdjustment(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Adjustment/DeleteAdjustment',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function SelectHospitalLikeName(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/BasicCommon/SelectHospitalLikeName',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function SelectOrganizaInfosLikeName(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/BasicCommon/SelectOrganizaInfosLikeName',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetDisabilityLivelListByStandardCode(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/BasicCommon/GetDisabilityLivelListByStandardCode',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetCenterCaseStatusByReportId(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Batch/GetCenterCaseStatusByReportId',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function BatchUpdateClaimNotion(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Batch/BatchUpdateClaimNotion',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function FileUpload(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Center/FileUpload',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetHospitalPage(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Center/GetHospitalPage',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetOrganizationPage(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Center/GetOrganizationPage',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetDisabilityLevel(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Center/GetDisabilityLevel',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetInjureItem(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Center/GetInjureItem',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetDisabilityclause(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Center/GetDisabilityclause',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function QueryAccidentCauses(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Center/QueryAccidentCauses',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function QueryCenterClaimRecord(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Center/QueryCenterClaimRecord',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function UpdateAdjustment(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Center/UpdateAdjustment',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function UpdateSimpleCase(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Center/UpdateSimpleCase',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function UpdateReportCase(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Center/UpdateReportCase',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function UpdateEditRegist(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Center/UpdateEditRegist',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function UpdateParCaseDispatch(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Center/UpdateParCaseDispatch',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function UpdateParAddCenter(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Center/UpdateParAddCenter',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function CenterSubmitAllSimpleCase(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Center/CenterSubmitAllSimpleCase',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function CenterReport(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Center/CenterReport',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function CenterDispatch(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Center/CenterDispatch',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetCenterFlows(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/CenterFlow/GetCenterFlows',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetChannelList(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Channel/GetChannelList',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function ChannelDetail(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Channel/ChannelDetail',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function EditChannel(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Channel/EditChannel',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function PolicyListByChannelCode(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Channel/PolicyListByChannelCode',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function CompensateListByChannelCode(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Channel/CompensateListByChannelCode',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function SimpleCompensateTempBuild(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Compensate/SimpleCompensateTempBuild',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function SimpleCompensateBuild(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Compensate/SimpleCompensateBuild',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function SelectSimpleCompensateInfo(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Compensate/SelectSimpleCompensateInfo',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function ChangerReportHandleType(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Compensate/ChangerReportHandleType',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function CompensateTempBuild(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Compensate/CompensateTempBuild',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function CompensateBuild(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Compensate/CompensateBuild',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetCompensateBuildInfo(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Compensate/GetCompensateBuildInfo',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function CheckRepeatReport(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Compensate/CheckRepeatReport',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetRepeatReport(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Compensate/GetRepeatReport',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetCustomerList(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Customer/GetCustomerList',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function CustomerDetail(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Customer/CustomerDetail',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function EditCustomer(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Customer/EditCustomer',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function PolicyListByCertificateNo(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Customer/PolicyListByCertificateNo',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function CompensateListByCertificateNo(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Customer/CompensateListByCertificateNo',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function CentCompensateList(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Customer/CentCompensateList',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function PolicyToCustomer(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Customer/PolicyToCustomer',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function ExistPolicyToCustomer(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Customer/ExistPolicyToCustomer',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function ExistUserToCustomer(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Customer/ExistUserToCustomer',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function SimpleGroupList(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Customer/SimpleGroupList',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function FullGroupList(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Customer/FullGroupList',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function AddOrEditGroup(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Customer/AddOrEditGroup',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function DeleteGroup(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Customer/DeleteGroup',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetReportHandleTypeById(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Customer/GetReportHandleTypeById',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetLawyerEngage(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/EngageLawyer/GetLawyerEngage',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function AddLawyerRecory(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/EngageLawyer/AddLawyerRecory',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function DeleteLawyerRecory(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/EngageLawyer/DeleteLawyerRecory',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetEngageLawyer(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/EngageLawyer/GetEngageLawyer',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function AddAnalysis(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/EngageLawyer/AddAnalysis',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetAnalysis(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/EngageLawyer/GetAnalysis',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function AddChargeSolution(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/EngageLawyer/AddChargeSolution',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetSolutionDetail(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/EngageLawyer/GetSolutionDetail',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function SubmitOrCheckRelation(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/EngageLawyer/SubmitOrCheckRelation',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function EngageReportPrice(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/EngageLawyer/EngageReportPrice',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function IsOperateLawyer(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/EngageLawyer/IsOperateLawyer',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetExamineNotionList(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/HandleRecord/GetExamineNotionList',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function FileUpload(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/HttpFileUpload/FileUpload',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function Base64FileUpload(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/HttpFileUpload/Base64FileUpload',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function UploadFileGetInfo(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/HttpFileUpload/UploadFileGetInfo',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function UploadFileGetBankCard(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/HttpFileUpload/UploadFileGetBankCard',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function AddLog(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Log/AddLog',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function WebLog(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Log/WebLog',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function AddReportLoss(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Losser/AddReportLoss',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function AddMedicalExamination(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/MedicalExamination/AddMedicalExamination',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function AddTempMedicalExamination(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/MedicalExamination/AddTempMedicalExamination',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function AddMedicalPayDetail(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/MedicalExamination/AddMedicalPayDetail',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetCompensateMedicalExamine(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/MedicalExamination/GetCompensateMedicalExamine',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetMedicalExaminationDetailsById(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/MedicalExamination/GetMedicalExaminationDetailsById',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function StartMedicalExamination(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/MedicalExamination/StartMedicalExamination',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function MedicalTralLevelView(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/MedicalSet/MedicalTralLevelView',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function UpdateMedicalTrialLevel(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/MedicalSet/UpdateMedicalTrialLevel',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function DeleteMedicalTralLevel(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/MedicalSet/DeleteMedicalTralLevel',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function MedicalLevelDetail(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/MedicalSet/MedicalLevelDetail',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetMedicalPeople(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/MedicalSet/GetMedicalPeople',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function PushMessage(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Message/PushMessage',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function AlreadyRead(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Message/AlreadyRead',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function MessageExistById(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Message/MessageExistById',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetAccessToken(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Message/GetAccessToken',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function WeChatPushMessage(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Message/WeChatPushMessage',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function WeChatRecordFromId(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Message/WeChatRecordFromId',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function AppMessageList(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Message/AppMessageList',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function AppPushMessage(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Message/AppPushMessage',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function AppAlreadyRead(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Message/AppAlreadyRead',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function AppUnReadCount(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Message/AppUnReadCount',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function AddMessage(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/MessageBoard/AddMessage',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetMessageCount(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/MessageBoard/GetMessageCount',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetMessage(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/MessageBoard/GetMessage',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function OrganizeListByLevel(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Organize/OrganizeListByLevel',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function WeiChatOrganizeList(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Organize/WeiChatOrganizeList',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function ChildrenOrganizeList(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Organize/ChildrenOrganizeList',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function WechatChildrenOrganizeList(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Organize/WechatChildrenOrganizeList',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetOrgListFuzzy(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Organize/GetOrgListFuzzy',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function OrganizeSetList(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Organize/OrganizeSetList',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function ImportOrgByCode(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Organize/ImportOrgByCode',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function SaveImportOrgByCode(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Organize/SaveImportOrgByCode',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function OrganizeDetail(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Organize/OrganizeDetail',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function OrganizeEdit(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Organize/OrganizeEdit',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function OrganizeChange(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Organize/OrganizeChange',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function MergeOrganize(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Organize/MergeOrganize',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function DeleteOrganize(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Organize/DeleteOrganize',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function ServiceOrgList(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Organize/ServiceOrgList',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function OrgAmountSetList(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Organize/OrgAmountSetList',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetOrgByCode(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Organize/GetOrgByCode',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function AddOrEditOrgAmount(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Organize/AddOrEditOrgAmount',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function DeleteOrgAmountSet(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Organize/DeleteOrgAmountSet',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function ShowAmountByReport(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Organize/ShowAmountByReport',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function CompanyInfoByCode(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Organize/CompanyInfoByCode',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function CompanyInfoByCenter(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Organize/CompanyInfoByCenter',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function CompanyInfoByCenterSingle(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Organize/CompanyInfoByCenterSingle',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function OrganzationSet(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Organize/OrganzationSet',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function UserOrganzationSet(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Organize/UserOrganzationSet',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function AreaCodeList(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Organize/AreaCodeList',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function CodeList(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Organize/CodeList',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function CityCodeList(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Organize/CityCodeList',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetCodeByCenter(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Organize/GetCodeByCenter',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function CodeInfoByCenter(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Organize/CodeInfoByCenter',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetPolicyPeoples(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Policy/GetPolicyPeoples',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetPolicyAllDetail(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Policy/GetPolicyAllDetail',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetPolicyHeadInfo(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Policy/GetPolicyHeadInfo',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetPolicyLists(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Policy/GetPolicyLists',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetCompensateList(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Policy/GetCompensateList',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function ExistLoser(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Policy/ExistLoser',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetPolicyListDetail(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Policy/GetPolicyListDetail',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetPolicyDetail(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Policy/GetPolicyDetail',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetAppPolicyDetatil(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Policy/GetAppPolicyDetatil',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function {id}(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Policy/GetPolicyProvision3/{id}',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetProvisionList(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Policy/GetProvisionList',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function QueryProvisionPage(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Policy/QueryProvisionPage',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetRecoveryDetail(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Recovery/GetRecoveryDetail',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function AddRecoveryDetailFromCenter(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Recovery/AddRecoveryDetailFromCenter',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function RecoveryFollowView(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/RecoveryFollow/RecoveryFollowView',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function AddRecoveryFollow(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/RecoveryFollow/AddRecoveryFollow',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function DelRecoveryFollow(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/RecoveryFollow/DelRecoveryFollow',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function SaveArbitrateInfo(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/RecoveryFollow/SaveArbitrateInfo',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function AddTrackRecordArbitrate(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/RecoveryFollow/AddTrackRecordArbitrate',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function SaveSueBaseInfo(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/RecoveryFollow/SaveSueBaseInfo',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function AddTrackRecordSue(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/RecoveryFollow/AddTrackRecordSue',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function AddTrackRecordNolitigate(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/RecoveryFollow/AddTrackRecordNolitigate',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function CheckFinishRecoveryFollow(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/RecoveryFollow/CheckFinishRecoveryFollow',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function FinishRecoveryFollow(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/RecoveryFollow/FinishRecoveryFollow',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function RecoverySubmitUpper(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/RecoveryFollow/RecoverySubmitUpper',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function UpdateEstimateRecoveryAmount(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/RecoveryFollow/UpdateEstimateRecoveryAmount',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function Test(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/RecoveryFollow/Test',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetReportList(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Report/GetReportList',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function SelectReportList(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Report/SelectReportList',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function UpdateReportOperter(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Report/UpdateReportOperter',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetReportTranslationPotion(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Report/GetReportTranslationPotion',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function AddReport(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Report/AddReport',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function UpdateReport(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Report/UpdateReport',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetUpdateReport(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Report/GetUpdateReport',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function UploadReportImage(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Report/UploadReportImage',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function UploadImageForApp(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Report/UploadImageForApp',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function MultiUploadImage(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Report/MultiUploadImage',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetReport(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Report/GetReport',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetReportInfo(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Report/GetReportInfo',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function {id}(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Report/GetReportDetail/{id}',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetReportandLosslist(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Report/GetReportandLosslist',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function {id}(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Report/GetReportLossName/{id}',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function {id}(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Report/GetReportLoss/{id}',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function CreateReportFollow(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Report/CreateReportFollow',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function AddFollow(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Report/AddFollow',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function SubmitFollow(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Report/SubmitFollow',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetImageInfo(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Report/GetImageInfo',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetImageInfoEdit(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Report/GetImageInfoEdit',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetImageInfoEditForApp(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Report/GetImageInfoEditForApp',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function UpdateImageInfo(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Report/UpdateImageInfo',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function SubmitImageInfo(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Report/SubmitImageInfo',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetReportFollowViewModel(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Report/GetReportFollowViewModel',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function CheckReport(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Report/CheckReport',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function CancelReport(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Report/CancelReport',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetReportCheck(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Report/GetReportCheck',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function UploadImages(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Report/UploadImages',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function QueryBankName(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Report/QueryBankName',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function QueryOpenBank(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Report/QueryOpenBank',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetSelectLoss(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Report/GetSelectLoss',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetReportFromCenter(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Report/GetReportFromCenter',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function UpdateReportFromCenter(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Report/UpdateReportFromCenter',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function UploadAppImage(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Report/UploadAppImage',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function DeleteImage(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Report/DeleteImage',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function SaveAppImage(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Report/SaveAppImage',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function WxGetReport(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Report/WxGetReport',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function ExportReport(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Report/ExportReport',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetExcelReportList(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Report/GetExcelReportList',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetRoleListPicc(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Role/GetRoleListPicc',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetRoleListAll(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Role/GetRoleListAll',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function RoleModuleByRoleId(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Role/RoleModuleByRoleId',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function AddOrUpdateRole(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Role/AddOrUpdateRole',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function UpadateRoleName(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Role/UpadateRoleName',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function DeleteRole(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Role/DeleteRole',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function DataAuthorityByRole(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Role/DataAuthorityByRole',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function EditDataAuthority(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Role/EditDataAuthority',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetUserModuleTree(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Role/GetUserModuleTree',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetUserDataAuthorityList(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Role/GetUserDataAuthorityList',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function RoleTest(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Role/RoleTest',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function DispatchPolicy(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/SchedulDispatch/DispatchPolicy',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function DispatchPolicyOutTime(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/SchedulDispatch/DispatchPolicyOutTime',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function DispatchView(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/SchedulDispatch/DispatchView',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function DispatchSetting(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/SchedulDispatch/DispatchSetting',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function DispatchWaitTime(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/SchedulDispatch/DispatchWaitTime',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function HandlerMonthList(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/SchedulDispatch/HandlerMonthList',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function SaveMonthList(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/SchedulDispatch/SaveMonthList',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetBaseMonthData(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/SchedulDispatch/GetBaseMonthData',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetToDoList(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Statistics/GetToDoList',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetReportStatistics(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Statistics/GetReportStatistics',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetReportOperateStatistics(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Statistics/GetReportOperateStatistics',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetUserRankingStatistics(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Statistics/GetUserRankingStatistics',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetTreatmentOperateStatistics(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Statistics/GetTreatmentOperateStatistics',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetPeopleInjuredStatistics(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Statistics/GetPeopleInjuredStatistics',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function StartSurvey(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Survey/StartSurvey',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetSurveyPC(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Survey/GetSurveyPC',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function AddTempSurveyPC(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Survey/AddTempSurveyPC',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetTaskList(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Survey/GetTaskList',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetReportSurvey(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Survey/GetReportSurvey',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetAppSurvey(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Survey/GetAppSurvey',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetSurveyList(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Survey/GetSurveyList',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetAppSurveyanalysis(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Survey/GetAppSurveyanalysis',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function SaveAppSurveyanalysis(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Survey/SaveAppSurveyanalysis',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function AppTempSaveSurve(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Survey/AppTempSaveSurve',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function AppNextSaveSurve(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Survey/AppNextSaveSurve',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetSruveyReport(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Survey/GetSruveyReport',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function InitialSurvey(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Survey/InitialSurvey',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetSurveyImage(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Survey/GetSurveyImage',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetImageGroupByTime(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Survey/GetImageGroupByTime',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetAppTab(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Survey/GetAppTab',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetCancelReason(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Survey/GetCancelReason',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetFileCount(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Survey/GetFileCount',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetSurveydUpdateRecordList(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/SurveyOpinion/GetSurveydUpdateRecordList',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function UpdateSurveyTaskStatus(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/SurveyOpinion/UpdateSurveyTaskStatus',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function InsertDetermineOpinion(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/SurveyOpinion/InsertDetermineOpinion',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function AddCheckOpinion(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/SurveyOpinion/AddCheckOpinion',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetDetermineTrajectory(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/SurveyOpinion/GetDetermineTrajectory',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetRejectedOpinion(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/SurveyOpinion/GetRejectedOpinion',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function SeekOthersAssist(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/SurveyOpinion/SeekOthersAssist',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function AppSurveySeekOthersAssist(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/SurveyOpinion/AppSurveySeekOthersAssist',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function AppSeekOthersAssist(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/SurveyOpinion/AppSeekOthersAssist',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function AppDetermineSubmit(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/SurveyOpinion/AppDetermineSubmit',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function UploadDetermineReportFile(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/SurveyOpinion/UploadDetermineReportFile',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function SingleSubmitDetermineCheck(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/SurveyOpinion/SingleSubmitDetermineCheck',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function EndSurveyCheck(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/SurveyOpinion/EndSurveyCheck',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function SubmitDetermineCheck(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/SurveyOpinion/SubmitDetermineCheck',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function LogOutTask(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/SurveyOpinion/LogOutTask',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GoWaitEstimate(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/SurveyOpinion/GoWaitEstimate',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function WaitEstimate(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/SurveyOpinion/WaitEstimate',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetSurveydImageList(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/SurveyOpinion/GetSurveydImageList',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetAppDetermineDetailInfo(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/SurveyOpinion/GetAppDetermineDetailInfo',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GoAppDetermine(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/SurveyOpinion/GoAppDetermine',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetLossReport(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/SurveyOpinion/GetLossReport',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function CheckButton(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/SurveyOpinion/CheckButton',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function Get(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Swagger/Get',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function UpdateSyncToCore(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/SystemManage/UpdateSyncToCore',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetSynctoCore(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/SystemManage/GetSynctoCore',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function StatisticsCaseCount(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/SystemManagerWorkbench/StatisticsCaseCount',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function StatisticsTimeEfficient(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/SystemManagerWorkbench/StatisticsTimeEfficient',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function StatisticRoughPay(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/SystemManagerWorkbench/StatisticRoughPay',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function LossCheckLevelList(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/SystemSet/LossCheckLevelList',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function UpdateLossCheckLevel(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/SystemSet/UpdateLossCheckLevel',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function LossCheckLevelByUserId(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/SystemSet/LossCheckLevelByUserId',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function UpperlossCheckLevelByUserId(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/SystemSet/UpperlossCheckLevelByUserId',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function UpdateAskCompensateLevel(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/SystemSet/UpdateAskCompensateLevel',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function AskCompensateLevelList(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/SystemSet/AskCompensateLevelList',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function AskCompensateLevelByUserId(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/SystemSet/AskCompensateLevelByUserId',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function UpperAskCompensateLevelByUserId(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/SystemSet/UpperAskCompensateLevelByUserId',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function Test(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/Test/Test',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function Get(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Test/Get',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function Get1(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Test/Get1',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function Get4(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Test/Get4',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetLawyerList(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/ThirdOrganizateManage/GetLawyerList',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function AddLawyerGroup(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/ThirdOrganizateManage/AddLawyerGroup',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function UpdateLawyerGroup(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/ThirdOrganizateManage/UpdateLawyerGroup',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function LawyerDetail(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/ThirdOrganizateManage/LawyerDetail',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetLawFirm(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/ThirdOrganizateManage/GetLawFirm',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function UpdateLawFirm(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/ThirdOrganizateManage/UpdateLawFirm',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetAllLeader(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/ThirdOrganizateManage/GetAllLeader',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function DeleteLawyer(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/ThirdOrganizateManage/DeleteLawyer',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetAllFirm(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/ThirdOrganizateManage/GetAllFirm',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetGroupByFirm(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/ThirdOrganizateManage/GetGroupByFirm',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function RegisterPreCheck(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/User/RegisterPreCheck',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function UserRegister(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/User/UserRegister',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function SendVerifyCode(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/User/SendVerifyCode',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function AuthorizeUnionId(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/User/AuthorizeUnionId',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function UserLogin(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/User/UserLogin',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function MobileLogin(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/User/MobileLogin',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function TokenStatecheck(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/User/TokenStatecheck',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function LogOutWeb(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/User/LogOutWeb',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function WechatMyInfo(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/User/WechatMyInfo',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function EmpowerUserList(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/User/EmpowerUserList',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function AddEmpoweredUser(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/User/AddEmpoweredUser',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function DelEmpoweredUser(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/User/DelEmpoweredUser',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function ChangePassword(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/User/ChangePassword',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function CheckIfHasCoreAccount(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/User/CheckIfHasCoreAccount',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function UserListByRoleId(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/User/UserListByRoleId',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function UserListByFlow(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/User/UserListByFlow',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function JobTypeGetUser(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/User/JobTypeGetUser',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function UserFuzzyZhongTai(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/User/UserFuzzyZhongTai',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function APPMyInfo(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/User/APPMyInfo',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function ChangeOldRoleId(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/User/ChangeOldRoleId',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function UpdateUserInfo(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/User/UpdateUserInfo',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetToken(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/User/GetToken',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function UserPiccByRole(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/UserPicc/UserPiccByRole',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetPayeeResponse(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/UserReport/GetPayeeResponse',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function Get(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/Version/Get',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetWorkProcessTree(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/WorkProcess/GetWorkProcessTree',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetEquationBookNo(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/WorkProcess/GetEquationBookNo',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetProcessHead(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/WorkProcess/GetProcessHead',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetWorkProcessList(data) {
  return new Promise((resolve, reject) => {
      $http.get('/api/WorkProcess/GetWorkProcessList',{ params:data }).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 

// 说明
export function GetCore(data) {
  return new Promise((resolve, reject) => {
      $http.post('/api/WorkProcess/GetCore',data).then(response => {
          if (response.Code === 1) {
              resolve(response.Data)
          } else {
              reject(response)
          }
      }).catch(err => {         
          reject(err)
      })
  })
} 
