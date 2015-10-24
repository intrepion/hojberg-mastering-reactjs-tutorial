import React from 'react';

class Page extends React.Component {
    render() {
        return (
            <div className='page'>
                {this.props.children}
            </div>
        );
    }

    shouldComponentUpdate() {
        return false;
    }
}

export default Page;
