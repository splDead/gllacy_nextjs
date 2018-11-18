import { helper } from './i18n';

const ChangeLanguage = () =>
    <select value={helper.getCurrentLanguage()} onChange={(e) => helper.setCurrentLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="ru">Русский</option>
    </select>;

export default ChangeLanguage;
