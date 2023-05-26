import Blocks from '../../Blocks';
import ChangePass from '../../ChangePass';
import Favourites from '../../Favourites';
import Follows from '../../Follows';
import InWork from '../../InWork';
import Notifications from '../../Notifications';
import Posts from '../../Posts';
import Questions from '../../Questions';
import Stats from '../../Stats';
import TestBlocks from '../../TestBlocks';
import Tests from '../../Tests';

export const contents: any = {
  notify: <Notifications />,
  chat: <InWork />,
  userInfo: <InWork />,
  stats: <Stats />,
  follows: <Follows />,
  favourite: <Favourites />,
  achievements: <InWork />,
  interviewes: <InWork />,
  posts: <Posts />,
  questions: <Questions />,
  blocks: <Blocks />,
  tests: <Tests />,
  testBlocks: <TestBlocks />,
  changePass: <ChangePass />,
  sessions: <InWork />,
};
