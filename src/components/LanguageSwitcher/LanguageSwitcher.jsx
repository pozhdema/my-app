import React from 'react';
import { connect } from 'react-redux';
import { NamespacesConsumer } from 'react-i18next';

const LanguageSwitcher = React.memo(props => {
    function onChange(lng, i18n) {
        i18n.changeLanguage(lng);
    }

    return (
        <NamespacesConsumer ns={['common']} wait={true}>
            {(t, { i18n}) => (
                <select
                    className="LanguageSwitcher"
                    defaultValue={props.lng}
                    onChange={e => onChange(e.target.value, i18n)}
                >
                    <option value="en-US">English</option>
                    <option value="uk">Українська</option>
                </select>
            )}
        </NamespacesConsumer>
    );
});

const mapStateToProps = state => {
    return {
        lang: state.i18next
    };
};

export default connect(mapStateToProps)(LanguageSwitcher);