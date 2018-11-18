import routes from '../server/routes';
import { translate } from './layout/i18n';

const { Link } = routes;

const MainMenu = ({t}) =>
    <div className='main-menu-container'>
        <div className='main-menu-title'>
            <span className='main-menu-title__label'>
                {t('mainMenuTitle')}
            </span>
        </div>
        <ul className='main-menu-list'>
            <Link route='catalog/new'>
                <a className='main-menu-list-link'>
                    <li className='main-menu-list-item main-menu-list-item__first'>
                        {t('mainMenuNew')}
                    </li>
                </a>
            </Link>
            <div className='menu-delimeter' />
            <Link route='catalog/creamy'>
                <a className='main-menu-list-link'>
                    <li className='main-menu-list-item'>
                        {t('mainMenuCreamy')}
                    </li>
                </a>
            </Link>
            <Link route='catalog/sherbets'>
                <a className='main-menu-list-link'>
                    <li className='main-menu-list-item'>
                        {t('mainMenuSherbet')}
                    </li>
                </a>
            </Link>
            <Link route='catalog/fruit-ice'>
                <a className='main-menu-list-link'>
                    <li className='main-menu-list-item'>
                        {t('mainMenuFruitIce')}
                    </li>
                </a>
            </Link>
            <Link route='catalog/melorin'>
                <a className='main-menu-list-link'>
                    <li className='main-menu-list-item'>
                        {t('mainMenuMelorin')}
                    </li>
                </a>
            </Link>
        </ul>
    </div>;

export default translate(['common'])(MainMenu);
