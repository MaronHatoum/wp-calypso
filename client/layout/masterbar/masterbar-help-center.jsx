import { HelpIcon } from '@automattic/help-center';
import classnames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { setHelpCenterVisible } from 'calypso/state/ui/actions';
import isHelpCenterVisible from 'calypso/state/ui/selectors/help-center-is-visible';
import Item from './item';

const MasterbarHelpCenter = () => {
	const helpCenterVisible = useSelector( isHelpCenterVisible );
	const dispatch = useDispatch();
	return (
		<Item
			onClick={ () => dispatch( setHelpCenterVisible( ! helpCenterVisible ) ) }
			className={ classnames( 'masterbar__item-help', {
				'is-active': helpCenterVisible,
			} ) }
			icon={ <HelpIcon newItems active={ helpCenterVisible } /> }
		/>
	);
};

export default MasterbarHelpCenter;
