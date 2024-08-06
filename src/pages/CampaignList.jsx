import React from 'react';
import '../css/CampaignList.css';
import App from './CampaignList';

const campaigns = [
  {
    id: 1,
    title: 'Clean Water Initiative',
    description: 'Providing clean water to rural areas.',
    image: 'https://via.placeholder.com/300'
  },
  {
    id: 2,
    title: 'Education for All',
    description: 'Ensuring education for underprivileged children.',
    image: 'https://via.placeholder.com/300'
  },
  {
    id: 3,
    title: 'Healthcare Access',
    description: 'Improving access to healthcare in remote regions.',
    image: 'https://via.placeholder.com/300'
  },
];

const CampaignList = () => {
  return (
    <div className="campaign-grid">
      {campaigns.map(campaign => (
        <CampaignList 
          key={campaign.id}
          title={campaign.title}
          description={campaign.description}
          image={campaign.image}
        />
      ))}
    </div>
  );
};

export default CampaignList;