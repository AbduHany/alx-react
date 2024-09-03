import React from 'react';
import PropTypes from 'prop-types';

const headerStyle = {
    backgroundColor: '#deb5b545'
};

const rowStyle = {
    backgroundColor: '#f5f5f5ab'
};

const CourseListRow = ({ isHeader = false, textFirstCell, textSecondCell = null }) => {
    return (
        <tr style={isHeader ? headerStyle : rowStyle}>
            {isHeader ?
                (textSecondCell === null ?
                    <th colSpan={2}>{textFirstCell}</th> :
                    <>
                        <th >{textFirstCell}</th>
                        <th >{textSecondCell}</th>
                    </>
                )
                : <><td>{textFirstCell}</td><td>{textSecondCell}</td></>}
        </tr>
    )
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string || PropTypes.number
}

export default CourseListRow