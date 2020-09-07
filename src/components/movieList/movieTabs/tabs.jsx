import React from 'react';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: [
                { title: 'All', attribute: 'all' },
                { title: 'Documentary', attribute: 'documentary' },
                { title: 'Comedy', attribute: 'comedy' },
                { title: 'Horror', attribute: 'horror' },
                { title: 'Crime', attribute: 'crime' },
            ],
        }
    }

    render() {
        const { tabs } = this.state;
        const { selectedTabIndex, handleTabClick } = this.props;

        return (
            <ul>
                {
                    tabs.map((tab, i) => {
                        return (
                            <li
                                key={tab.title}
                                dangerouslySetInnerHTML={{ __html: tab.title }}
                                onClick={(e) => handleTabClick(e, i)}
                                className={i === selectedTabIndex ? 'active' : ''}
                                data-tab={tab.attribute}

                            />
                        )
                    })
                }
            </ul>
        )
    }
}

export default Tabs;