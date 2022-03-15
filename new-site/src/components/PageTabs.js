import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { Tabs } from 'hds-react';

const resolvePathFromSlug = (slug) => {
  const parts = slug
    .trim()
    .split('/')
    .filter((p) => !!p);
  return parts.slice(0, -1).join('/');
};

const PageTabs = ({ pageContext, children }) => {
  const slug = pageContext.frontmatter.slug;
  const mdxChildren = React.Children.toArray(children);
  const tabList = mdxChildren.find((reactChild) => reactChild.type.componentName === 'PageTabList');
  const tabPanel = mdxChildren.find((reactChild) => reactChild.type.componentName === 'PageTabPanel');
  const tabs = tabList.props?.children.filter((reactChild) => reactChild.type.componentName === 'PageTab');
  const activeIndex = tabs.findIndex((tab) => slug.endsWith(tab.props.href));
  const basePath = resolvePathFromSlug(slug, activeIndex === 0);

  return (
    <Tabs initiallyActiveTab={activeIndex}>
      <Tabs.TabList>
        {tabs.map((tab) => (
          <Tabs.Tab key={tab.props.href} onClick={() => navigate(`/${basePath}${tab.props.href}`)}>
            {tab.props.children}
          </Tabs.Tab>
        ))}
      </Tabs.TabList>
      {tabs.map((tab, index) => (
        <Tabs.TabPanel key={tab.props.href}>{activeIndex === index ? tabPanel.props.children : <div />}</Tabs.TabPanel>
      ))}
    </Tabs>
  );
};

PageTabs.propTypes = {
  pageContext: PropTypes.shape({
    frontmatter: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
  }),
  children: PropTypes.node.isRequired,
};

const TabList = ({ children }) => {
  console.log(children);

  return <Tabs.TabList className="pageTabsList">{children}</Tabs.TabList>;
};

TabList.componentName = 'PageTabList';

TabList.propTypes = {
  children: PropTypes.node.isRequired,
};

const Tab = ({ href, slug, children }) => <Tabs.Tab onClick={() => navigate(slug)}>{children}</Tabs.Tab>;

Tab.componentName = 'PageTab';

Tab.propTypes = {
  slug: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const TabPanel = ({ children }) => <Tabs.TabPanel>{children}</Tabs.TabPanel>;

TabPanel.componentName = 'PageTabPanel';

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
};

PageTabs.TabList = TabList;
PageTabs.Tab = Tab;
PageTabs.TabPanel = TabPanel;

export default PageTabs;
