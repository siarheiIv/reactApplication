import React, { useState } from 'react';

const Tabs = (props) => {
    const [tabs, setTabs] = useState(
        [
            { title: 'All', attribute: 'all' },
            { title: 'Action', attribute: 'action' },
            { title: 'Adventure', attribute: 'adventure' },
            { title: 'Animation', attribute: 'animation' },
            { title: 'Drama', attribute: 'drama' },
            { title: 'Family', attribute: 'family' },
            { title: 'Fantasy', attribute: 'fantasy' },
            { title: 'Romance', attribute: 'romance' },
            { title: 'Science Fiction', attribute: 'science fiction' },
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