import { translate } from './i18n';
import routes from '../../server/routes';
import MainMenu from '../MainMenu';

const { Link } = routes;

const Header = ({ t }) =>
    <header className='header'>
        <div className='left-header-block'>
            <Link route='index'>
                <img className='logo' src='../../static/assets/img/Logo.png' />
            </Link>
            <MainMenu />
            <nav>
                <Link route='delivery'>
                    <a className='nav-header-link'>
                        <span className='nav-header-link__label'>
                            {t('delivery')}
                        </span>
                    </a>
                </Link>
                <Link route='about'>
                    <a className='nav-header-link'>
                        <span className='nav-header-link__label'>
                            {t('About')}
                        </span>
                    </a>
                </Link>
            </nav>
        </div>
        <div className='right-header-block'>
            <div>
                search
            </div>
            <div>
                login
            </div>
            <div>
                bucket
            </div>
        </div>
    </header>;

export default translate(['common'])(Header);
