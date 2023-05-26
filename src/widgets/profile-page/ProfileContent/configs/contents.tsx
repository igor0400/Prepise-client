import Achievements from '../../Achievements';
import Blocks from '../../Blocks';
import ChangePass from '../../ChangePass';
import Chat from '../../Chat';
import Favourites from '../../Favourites';
import Follows from '../../Follows';
import Interviewes from '../../Interviewes';
import Notifications from '../../Notifications';
import Posts from '../../Posts';
import Questions from '../../Questions';
import Sessions from '../../Sessions';
import Stats from '../../Stats';
import TestBlocks from '../../TestBlocks';
import Tests from '../../Tests';
import UserInfo from '../../UserInfo';

export const contents: any = {
  notify: <Notifications />,
  chat: <Chat />,
  userInfo: <UserInfo />,
  stats: <Stats />,
  follows: <Follows />,
  favourite: <Favourites />,
  achievements: <Achievements />,
  interviewes: <Interviewes />,
  posts: <Posts />,
  questions: <Questions />,
  blocks: <Blocks />,
  tests: <Tests />,
  testBlocks: <TestBlocks />,
  changePass: <ChangePass />,
  sessions: <Sessions />,
};
