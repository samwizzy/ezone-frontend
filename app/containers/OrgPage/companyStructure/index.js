import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import TabsPage from './components/TabsPage';
import * as Actions from '../actions';
import * as Selectors from '../selectors';

class CompanyStructureApp extends React.Component {
    render(){
        return (
            <TabsPage />
        )
    }
}


CompanyStructureApp.propTypes = {
    loading: PropTypes.bool,
    openNewPartyAction: PropTypes.func,
    openNewSubPartyAction: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
    loading: Selectors.makeSelectLoading(),
});

function mapDispatchToProps(dispatch) {
    return {
        openNewPartyAction: () => dispatch(Actions.openNewPartyDialog()),
        openNewSubPartyAction: () => dispatch(Actions.openNewSubGroupDialog()),
    };
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default compose(
    withConnect,
    memo,
)(CompanyStructureApp);