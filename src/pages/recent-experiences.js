import Head from 'next/head'
import Header from "components/layout/Header";
import SearchBar from "components/common/SearchBar";
import ExperiencesList from "components/common/ExperiencesList";
import ExperiencesGrid from "components/common/ExperiencesGrid";

import recentExperiences from "testData/recent-experiences";
import popularExperiences from "testData/popular-experiences";

export default function RecentExperiences() {
  return (
    <div>
      <Head>
        <title>Recent Experiences - Builds Test Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <SearchBar />

        <ExperiencesList
          title="Recent Experiences"
          items={recentExperiences}
        />
        <ExperiencesGrid
          title="Popular Categories"
          items={popularExperiences}
        />
        <ExperiencesList
          seeAllUrl="/experiences"
          title="Trending Experiences"
          items={recentExperiences}
        />
      </main>
    </div>
  )
}
