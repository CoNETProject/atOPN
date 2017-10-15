export const checkAgainTimeOut = 1000 * 60 * 5
export const whiteList = []
export const domainBlackList = []
export const domainListPool = new Map ()
export const socketPath = 'pac'
export const AllDataToGateway = false
export const localServerPort = 3001
export const connectTimeOut = 5000

export const imapData: IinputData = {
	imapPortNumber: '993',
	imapIgnoreCertificate: false,
	imapServer: 'imap.server.com',
	imapSsl: true,
	serverFolder: 'serverFolder',
	clientFolder: 'clientFolder',
	randomPassword: 'randomPassword',
	uuid: 'uuid',
	imapUserName: 'imapUserName',
	imapUserPassword: 'imapUserName'
}