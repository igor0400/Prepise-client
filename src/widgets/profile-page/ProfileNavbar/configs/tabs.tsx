import notify from 'public/images/icons/notify.svg';
import userInfo from 'public/images/icons/user-info.svg';
import stats from 'public/images/icons/stats.svg';
import chat from 'public/images/icons/chat.svg';
import changePass from 'public/images/icons/change-pass.svg';
import sessions from 'public/images/icons/sessions.svg';
import settings from 'public/images/icons/settings.svg';
import follows from 'public/images/icons/follows.svg';
import favourite from 'public/images/icons/fvourite-inline.svg';
import achievements from 'public/images/icons/achievements.svg';
import interviewes from 'public/images/icons/interviewes.svg';
import signOut from 'public/images/icons/signOut.svg';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import {
  BlockPapersIcon,
  BlockQuestionIcon,
  PaperIcon,
  QuestionIcon,
} from '../../../../shared';
import { Tab } from '../model/types/tab';

export const tabs: Tab[][] = [
  [
    {
      id: 'notify',
      name: 'Уведомления',
      icon: notify,
      iconSize: 19,
    },
  ],
  [
    {
      id: 'chat',
      name: 'Мессенджер',
      icon: chat,
      iconSize: 19,
    },
  ],
  [
    {
      id: 'userInfo',
      name: 'Личная информация',
      icon: userInfo,
    },
    {
      id: 'stats',
      name: 'Статистика',
      icon: stats,
    },
  ],
  [
    {
      id: 'follows',
      name: 'Подписки',
      icon: follows,
      iconSize: 21,
    },
    {
      id: 'favourite',
      name: 'Избранное',
      icon: favourite,
      iconSize: 15,
    },
    {
      id: 'achievements',
      name: 'Достижения',
      icon: achievements,
    },
    {
      id: 'interviewes',
      name: 'Собеседования',
      icon: interviewes,
      iconSize: 24,
    },
  ],
  [
    {
      id: 'posts',
      name: 'Мои посты',
      icon: <NewspaperIcon />,
    },
    {
      id: 'questions',
      name: 'Мои вопросы',
      icon: <QuestionIcon style={{ width: 22, height: 22 }} color="#000" />,
    },
    {
      id: 'blocks',
      name: 'Мои блоки',
      icon: (
        <BlockQuestionIcon style={{ width: 22, height: 22 }} color="#000" />
      ),
    },
    {
      id: 'tests',
      name: 'Мои тесты',
      icon: <PaperIcon style={{ width: 22, height: 22 }} color="#000" />,
    },
    {
      id: 'testBlocks',
      name: 'Мои блоки тестов',
      icon: <BlockPapersIcon style={{ width: 22, height: 22 }} color="#000" />,
    },
  ],
  [
    {
      id: 'changePass',
      name: 'Сменить пароль',
      icon: changePass,
      iconSize: 18,
    },
    {
      id: 'sessions',
      name: 'Активные сессии',
      icon: sessions,
      iconSize: 20,
    },
    {
      id: 'settings',
      name: 'Настройки',
      icon: settings,
    },
  ],
  [
    {
      id: 'singOut',
      name: 'Выйти',
      icon: signOut,
      iconSize: 20,
    },
  ],
];
