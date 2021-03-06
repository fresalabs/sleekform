import FormComponent from './components/Form';
import ItemFooterComponent from './components/ItemFooter';
import ItemHeaderComponent from './components/ItemHeader';
import QuestionComponent from './components/Question';
import RadioComponent from './components/Radio';
import RatingComponent from './components/Rating';
import ScaleComponent from './components/Scale';
import SelectComponent from './components/Select';
import SummaryComponent from './components/Summary';
import TextComponent from './components/Text';
import WelcomeComponent from './components/Welcome';
import {
  SleekFormThemeProvider as SleekFormThemeProviderComponent,
  theme as SleekFormBasicThemeObject
} from './style/SleekFormThemeProvider';

export const Form = FormComponent;
export const ItemFooter = ItemFooterComponent;
export const ItemHeader = ItemHeaderComponent;
export const Question = QuestionComponent;
export const Radio = RadioComponent;
export const Rating = RatingComponent;
export const Scale = ScaleComponent;
export const Select = SelectComponent;
export const Summary = SummaryComponent;
export const Text = TextComponent;
export const Welcome = WelcomeComponent;
export const SleekFormThemeProvider = SleekFormThemeProviderComponent;
export const SleekFormBasicTheme = SleekFormBasicThemeObject;

export default {
  Form,
  ItemFooter,
  ItemHeader,
  Question,
  Radio,
  Rating,
  Scale,
  Select,
  Summary,
  Text,
  Welcome,
  SleekFormThemeProvider,
  SleekFormBasicTheme
};
