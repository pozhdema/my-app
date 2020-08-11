import React from "react";
import '../home/home.css';
import {withNamespaces} from "react-i18next";

const Gallery = React.memo(props => {
    const { t } = props;
    return (
        <div className='pages'>
            <h1>{t('nav.gallery')}</h1>
        </div>
    )
});

export default withNamespaces('common')(Gallery);