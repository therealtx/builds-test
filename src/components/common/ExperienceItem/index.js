import React, {useState} from "react";
import c from "classnames";
import ItemHead from "./components/ItemHead";
import ItemContent from "./components/ItemContent";
import ItemDetails from "./components/ItemDetails";
import ItemActivities from "./components/ItemActivities";
import styles from "./index.module.scss";

const tabs = [
  {
    title: "Details",
    component: ItemDetails
  },
  {
    title: "Activities",
    component: ItemActivities
  },
];

const ExperienceCategory = (props) => {
  const {category, item, activities} = props;
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.experienceItem}>
      <ItemHead
        title={item.title}
        backgroundColor={category.backgroundColor}
        imagePath={item.imagePath}
        imageBackground={item.imageBackground}
      />

      <ItemContent
        title={item.title}
        description={item.description}
        categoryName={category.title}
        path={category.path}
        usersCount={item.usersCount}
      />

      <div className={styles.experienceItemTabs}>
        {tabs.map((tab, index) => (
          <div key={index} onClick={() => setActiveTab(index)} className={c({
            [styles.activeTab]: index === activeTab
          })}>
            {tab.title}
          </div>
        ))}
      </div>

      <div className={styles.experienceItemTabsComponent}>
        {activeTab === 0 && <ItemDetails category={category} experience={item} />}
        {activeTab === 1 && <ItemActivities activities={activities} />}
      </div>

    </div>
  );
};

export default ExperienceCategory;
