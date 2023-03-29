type VerifyUser = (Dbuser: User, SentData: User) => boolean;
type User = { name: string; password: string };

const VerifyUserFunc: VerifyUser = (Dbuser, SentData) => {
  return Dbuser.name === SentData.name && Dbuser.password === SentData.password;
};

const DataThatWasSend = { name: 'julia', password: '123456' };
const DataOnDb = { name: 'julia', password: '123456' };
const LongIn = VerifyUserFunc(DataThatWasSend, DataOnDb);
console.log(LongIn);
