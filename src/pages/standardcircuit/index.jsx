import { Trip } from '../../components'

const StandardCircuit = () => {
  return (
    <Trip
      mapImg={'assets/Standard-Circuit.png'}
      overview={`Standard Circuit, as the name suggests, is the most popular bike
      tour in Ladakh owing to its low cost, and yet it still manages to
      visit the most famous destinations of Ladakh. From the fascinating
      town of Leh to the breathtaking beauty of Sham Valley, the
      serenity of Nubra Valley, the village of Turtuk, which has a rich
      history and is known for producing the best apricots in the world
      and the magnificence of Pangong Lake, this tour covers it all.
      However, if you are inclined to spend more than a week in Ladakh,
      the other two tours might interest you.`}
      carouselImageCount={21}
      highlights={[
        { key: 1, label: 'Entry point is Leh, Exit Point is Leh.' },
        {
          key: 2,
          label:
            '710 KM ride Ride to the former highest road in the world, Khardung La.',
        },
        {
          key: 3,
          label:
            'Visit Pangong Lake, reminiscent of the Bollywood movie ‘3 Idiots’.',
        },
        {
          key: 4,
          label: 'Meet double-humped camels in Hunder, Nubra Valley.',
        },
        {
          key: 5,
          label:
            ' Visit the historical Turtuk village that was conquered by the Indian Army in 1971.',
        },
        {
          key: 6,
          label:
            'Visit the magnificent Shanti Stupa, Diskit Monastery and Thiksey Monastery.',
        },
      ]}
      inclusions={[
        {
          key: 1,
          label:
            'Ladakhi traditional dance performance on Day 01 at the hotel.',
        },
        {
          key: 2,
          label:
            '3-star hotel accommodation on twin sharing in Leh (03 nights).',
        },
        {
          key: 3,
          label:
            'Swiss Tented Camp stay on twin sharing in Nubra Valley and Pangong Tso (03 nights).',
        },
        {
          key: 4,
          label: 'Breakfast and dinner everyday.',
        },
        {
          key: 5,
          label: '01 Bonfire evening in Nubra Valley.',
        },
        {
          key: 6,
          label: 'Royal Enfield Himalayan 411 cc BS6 from Day 02 to Day 06.',
        },
        {
          key: 7,
          label: 'Fuel for the entire tour.',
        },
        {
          key: 8,
          label:
            'Helmets, Elbow Guards, Knee Guards for Rider and Pillion. Gloves for Rider.',
        },
        {
          key: 9,
          label:
            'Professional mechanic for assistance in case of motorbike breakdown.',
        },
        {
          key: 10,
          label: 'Captain for overall guidance on the tour.',
        },
        {
          key: 11,
          label: 'Backup vehicle from Day 03 to Day 06.',
        },
        {
          key: 12,
          label: 'Inner Line Permits.',
        },
        {
          key: 13,
          label: 'Supplemental oxygen support for the entire tour.',
        },
        {
          key: 14,
          label: 'Basic Medical assistance.',
        },
      ]}
      exclusions={[
        {
          key: 1,
          label: 'Domestic/International Airfare, Travel Insurance.',
        },
        {
          key: 2,
          label: 'Lunch on all days.',
        },
        {
          key: 3,
          label:
            'Tickets for monasteries, museums, and activities like rafting, camel ride, ATV ride.',
        },
        {
          key: 4,
          label:
            'Any damage to the motorbike in case of accident isn’t covered. The rider will be liable to pay for the damaged parts/servicing of the damaged vehicle.',
        },
        {
          key: 5,
          label:
            'Extra billing at the hotel, tips during meals or tips to drivers/waiters.',
        },
      ]}
      itinerary={[
        {
          key: 1,
          label: `Our representative will meet you at the airport and escort you to
              the accommodation in Leh where you will check in. We advise you to
              take an early flight to Leh so that you have ample time for rest
              and acclimatization. Relish the Ladakhi traditional dance
              performance at the hotel post lunch. Briefing and team
              introduction will take place before dinner.
              Dinner and overnight in Leh.`,
        },
        {
          key: 2,
          label: `After breakfast, you will begin local sightseeing around Leh. Your first destination for the day would be The Hall of Fame, a museum dedicated to the Indian Army. After the museum visit, you will head towards Gurudwara Patthar Sahib, located 25 KM from Leh, built in memory of Guru Nanak Dev’s visit to Leh roughly 500 years ago. After visiting the Gurudwara, you will be at the Magnetic Hill- a 15-minute drive. After Magnetic Hill, it’s time to visit the very serene Sangam Point, the confluence of the Indus and Zanskar rivers. After Sangam, you will visit Shanti Stupa. If we are here before sunset, you will witness the jaw-dropping view of Leh town. After the Shanti Stupa visit, your last attraction for the day would be the Leh Palace which was once the residence of a former Ladakhi King from the 17th to the mid-19th century. 
          Dinner and overnight in Leh.
          `,
        },
        {
          key: 3,
          label: `After breakfast, you will leave for Nubra Valley via Khardung La, one of the highest motorable passes in the world, sitting at an elevation of 5360 meters. Take a brief halt here for a few pictures. As you reach Diskit, you will visit the Diskit Monastery- the largest monastery in Nubra Valley. A towering Buddha statue sits here with a magnificent view. The existence of this monastery dates back to the 14th century. After visiting the Diskit Monastery, you will leave for Hunder. On the way to Hunder, you will witness dunes in the cold desert. Check-in to the accommodation once you reach Hunder. Take a brief rest and then head out to the cold desert to enjoy a double-humped camel ride. These camels, also known as Bactrian Camels, are found only in Central Asia and Nubra Valley in India. End your day with dinner and overnight in Hunder.`,
        },
        {
          key: 4,
          label: `After breakfast, you will leave for Turtuk, a tiny village in the Baltistan region of Ladakh. Turtuk was part of Pakistan until 1971 when the Indian Army conquered it and never gave it back. You will indulge in a walking tour of this fascinating village as you witness the simple lifestyle of the Balti people. You will return to Hunder in the evening. Dinner and overnight in Hunder.`,
        },
        {
          key: 5,
          label: `Today, you will leave for Pangong Tso right after breakfast. You will be awestruck as you drive along the Shyok river. As you move towards Pangong Tso, you will pass the beautiful villages of Shyok and Durbuk. You will not believe your eyes when you catch a glimpse of Pangong Tso obscured by gigantic mountains. Check in to the accommodation once you reach Pangong Tso. Head out, walk towards the lake and soak in serenity. 
          Dinner and overnight at Pangong Tso.
          
          Fun Fact: Pangong Tso lies both in India and China. The maximum length of the lake is a staggering 134 KM.`,
        },
        {
          key: 6,
          label: `You will wake to the incredible view of Pangong Tso, have breakfast, and then leave for Leh via Chang La, one of the highest motorable passes in the world. You will visit Thiksey Monastery before reaching Leh. It resembles the Potala Palace in Lhasa, Tibet, and is the largest monastery in Central Ladakh. After reaching Leh- tour the local market and shop, dive into the local culture, and try authentic cuisines.
          Dinner and overnight in Leh.`,
        },
        {
          key: 7,
          label: `After breakfast, you will get transferred to the airport with countless memories of Ladakh. Goodbye and do visit again. Julley!`,
        },
      ]}
    />
  )
}

export default StandardCircuit
