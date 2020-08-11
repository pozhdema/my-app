import React from "react";
import '../home/home.css';
import './contact.css';
import {withNamespaces} from "react-i18next";

const Contact = React.memo(props => {
    const { t } = props;
    return (
        <div className='pages'>
            <h1>{t('nav.contact')}</h1>
        </div>
    )
});

export default withNamespaces('common')(Contact);