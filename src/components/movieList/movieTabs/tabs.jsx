import React, { useState } from 'react';

const Tabs = (props) => {
    const [tabs, setTabs] = useState(
        [
            { title: 'All', attribute: 'all' },
            { title: 'Documentary', attribute: 'documentary' },
            { title: 'Comedy', attribute: 'comedy' },
            { title: 'Horror', attribute: 'horror' },
            { title: 'Crime', attribute: 'crime' },
        ]
    );
    const { selectedTabIndex, handleTabClick } = props;

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

export default Tabs;