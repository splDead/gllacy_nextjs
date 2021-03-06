import React from 'react';
import Head from 'next/head';
import wrapper from './wrapper';
import Header from './Header';
import Footer from './Footer';

import './../../static/assets/css/main.css';

const layout = (Page) => wrapper(class Layout extends React.Component {

    state = {
        background: '#849d8f'
    };

    render() {
        return (
            <div style={{ backgroundColor: this.state.background }}>
                <div className='layout-positioner'>
                    <Head>
                        <meta name='viewport' content='width=device-width, initial-scale=1'/>
                    </Head>
                    <Header/>
                    <Page {...this.props} />
                    <Footer/>
                </div>
            </div>
        )
    }

    static translateNS = [...Header.translateNS || [], ...Page.translateNS || []];

    static getInitialProps = async (ctx) => {
        return await Promise.all([
            Header.getInitialProps ? Header.getInitialProps(ctx) : Promise.resolve(true),
            Page.getInitialProps ? Page.getInitialProps(ctx) : Promise.resolve(true),
        ]);
    }
});

export default layout;
