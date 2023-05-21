import { ReplyType } from './model/types/reply';
import { parseText } from './lib/assets/parseText';
import Reply from './components/Reply';

export type { ReplyType };
export { parseText as parseReplyText };
export default Reply;
