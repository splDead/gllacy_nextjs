import Head from 'next/head';
import { translate } from '../components/layout/i18n';
import Layout from '../components/layout';

const Index = ({ t }) =>
    <main>
        <Head>
            <title>{t('this is home page!')}</title>
        </Head>
        <section>
            morozhenka
        </section>
        <section>
            varenie and shoko
        </section>
        <section>
            hits
        </section>
        <section>
            o magaze
        </section>
        <section>
            blog post
        </section>
        <section>
            map
        </section>
    </main>;

export default Layout(translate(['index'])(Index));
