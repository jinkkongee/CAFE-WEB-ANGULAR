server실행법
코드 다운로드 후 package.json파일 내의 dependencies를 모두 설치한다.
  - ex) npm install --save mongoose
putty로 AWS서버에서 제공한 개인키로 로그인한 후 해당 폴더로 이동
sudo node app.js실행
sudo node app.js& -->서버유지


mongodb(mlab)연동법
app.js파일에 포트를 알맞게 맞춰주고, mongoose.connect로 mlab에서 제공한
mongourl과 맞춰준다.

app.js파일
const port = 3000;
const app = express();
app.listen(3000, function(){
  console.log('Express server has started on port 3000')
})
const connect = () => {
  return mongoose.connect('mongodb://wj:1q2w3e4r!!@ds117334.mlab.com:17334/dbtest');
};
config/database.js파일
database: 'mongodb://wj:1q2w3e4r!!@ds117334.mlab.com:17334/dbtest',
secret: 'SeCrEtKeYfOrHaShInG'--> 필요시 비밀번호 암호화


angular적용법
코드 다운로드 후 git bash 실행
package.json이 있는 폴더(angular-src, lastproject)에서 npm install 설치
angular클라이언트 사용을 위해 npm install -g angular-cli설치
최신버전 설치 = npm install -g @anular/cli@latest

  - ex)auth.server.ts 파일 내의 URL을 로컬에서 할 경우 localhost:port로 맞추고, AWS서버를 킨 상태에서 할경우 Ipv4PublicIP:port로 맞춰준다.
cd lasts / cd lasteproject 이동
cd angular-src로 이동 angular-src폴더 내의 파일 수정이 있으면 수정후에
ng build 명령을 통해 수정사항 저장.
