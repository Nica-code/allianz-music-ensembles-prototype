export const externalLinks = {
  quote: "https://forms.gle/LbBmjp8uhE6gigvAA",
  musicList: "https://drive.google.com/file/d/1lVjwFTAEdUpZt1tluRu4ic8ugRGGvKD0/view?usp=drivesdk",
  email: "mailto:ian@allianzmusicensembles.com",
  phone: "tel:+13045503078",
  sms: "sms:+13045503078",
  instagram: "https://www.instagram.com/allianzmusicensembles",
  youtube: "https://www.youtube.com/channel/UCtjE1zkH7J1KNhq3d4CEHuQ",
  facebook: "https://m.facebook.com/AllianzMusicEnsembles/",
  theKnotReview: "https://www.theknot.com/review-wedding-vendors/2037426",
  weddingWire: "https://www.weddingwire.com/biz/allianz-music-ensembles/c64da8c30a3edadc.html",
  weddingWireReview: "https://www.weddingwire.com/shared/rate/new?vid=c64da8c30a3edadc",
};

export const navigation = [["About", "#about"], ["Ensembles", "#ensembles"], ["Listen", "#listen"], ["FAQ", "#faq"], ["Contact", "#contact"]];

export const ensembleCategories = [
  { id: "solo", name: "Solo", detail: "Violin, cello, or piano for an intimate and expressive performance." },
  { id: "duo", name: "String Duo", detail: "Violin and cello: warm, versatile, and ideal for smaller settings." },
  { id: "trio", name: "String Trio", detail: "Two violins and cello, or violin, viola, and cello, selected around your music." },
  { id: "quartet", name: "String Quartet", detail: "Two violins, viola, and cello—the fullest and most balanced string sound." },
  { id: "brass-quintet", name: "Brass Quintet", detail: "A bold, ceremonial ensemble with presence and brilliance." },
  { id: "mixed", name: "Mixed Ensembles", detail: "Flute, violin, cello, and tailored combinations designed for your occasion." },
];

const sc = (path) => `https://w.soundcloud.com/player/?url=https://soundcloud.com/user-753905061/${path}&sharing=false&progress=true&hide_related=true&color=c9a451&inverse=true&auto_play=false&show_user=true&show_artwork=false&visual=false&show_teaser=false&show_comments=false`;
export const soundCloudTracks = {
  duo: [["Can't Help Falling in Love", sc("duo-presley-cant-help-falling-in-love")], ["Air on the G String", sc("duo-bach-air-on-the-g-string")], ["A Thousand Years", sc("duo-perri-a-thousand-years")], ["All of Me", sc("duo-legend-all-of-me")]],
  trio: [["Air on the G String", sc("trio-bach-air-on-the-g-string")], ["A Thousand Years", sc("trio-perri-a-thousand-years")], ["Trumpet Voluntary", sc("trio-clarke-trumpet-voluntary")], ["Flashing Lights", sc("trio-west-flashing-lights")]],
};

export const testimonials = [
  { quote: "Thanks for helping our daughter’s dream come true! It seems on that day everything was right in the world. Your music is beautiful. You completed the day!", name: "Parents of Kaley & Jared", date: "Married 05/30/2020" },
  { quote: "Thank you for making our wedding so special! Having such beautifully played music during our ceremony is something our guests, Sean, and I will always remember and cherish.", name: "Sean & Michelle", date: "Married 05/26/2018" },
  { quote: "Thanks so much for making our day truly memorable and arranging our special request, ‘Hooked on a Feeling.’ One word: awesome!", name: "Kaitlin & Rusty", date: "Married 01/07/2017" },
  { quote: "The quartet performed beautifully and made our dream wedding a reality. Organizing the music was the easiest part. I highly recommend Ian and his string quartet.", name: "John & Lindsey", date: "Married 06/04/2016" },
  { quote: "The music was one of the most important aspects of our wedding, and my husband and I knew we could trust Ian to make it beautiful. I cannot recommend him enough.", name: "Erin & Mike", date: "Married 07/11/2015" },
];

export const bookingSteps = [
  ["Reserve your date", "Share the details of your event, review the contract, and make your deposit."],
  ["Select your music", "Choose the music for each part of your event with help from your booking agent."],
  ["Meet your coordinator", "Your group leader confirms timing, cues, and final details before the event."],
  ["Enjoy the moment", "Your musicians arrive prepared so you can be present for the occasion."],
];

export const faqGroups = [
  { title: "General", items: [["How does it work?", "Reserve your date with a signed contract and deposit. Next, select your music and submit the music worksheet. Your Music Coordinator will reach out before the event to finalize the details, and then your musicians will bring the celebration to life."], ["What ensemble choices do you offer?", "Choose a string quartet, string trio, string duo, solo violin, cello or piano, brass quintet, or a mixed-instrument ensemble. We are also happy to tailor an ensemble to your event."], ["Which ensemble do you recommend?", "We recommend the string quartet because it offers the most balanced representation of the orchestral string family. Most classical and modern string repertoire is written for quartet, giving it the richest range of available arrangements."], ["Can you provide other musicians?", "Yes. Our network includes string, brass, woodwind, vocal, and other professional musicians. Guest performers require a 30-minute day-of rehearsal with the ensemble."]] },
  { title: "Repertoire", items: [["How do we choose our music?", "After booking, you will receive a worksheet for your event. Select the musical styles and key moments you want covered. Your booking agent can recommend pieces and help shape the program."], ["Can we request a song that is not on the music list?", "Yes. One of our arrangers can create a custom arrangement for $125. Please allow a minimum of two months for this service."], ["Can someone help us pick songs?", "Absolutely. Your booking agent is happy to recommend music that suits the ensemble, venue, and atmosphere you want."]] },
  { title: "At the event", items: [["Do you perform outdoors?", "Yes, provided the musicians and instruments are protected from rain and direct sunlight, there is no precipitation, and the temperature is at least 60°F."], ["What space and equipment do you need?", "A string quartet needs approximately 10 by 6 feet; a trio needs 6 by 6 feet. Please provide one straight-backed armless chair per musician and a secure area for cases and belongings."], ["What do the musicians wear?", "The musicians usually wear concert black. If you prefer different attire, ask when booking and the team will try to accommodate it."], ["Do you attend the wedding rehearsal?", "Attendance is optional. For $100 plus mileage, the Music Coordinator can attend, sample the selected music, and rehearse processionals with you."], ["What if the booking runs late?", "Overtime is billed at $50 per half-hour per musician, beginning ten minutes after the contracted end time."]] },
  { title: "Payment & policies", items: [["Do you require a deposit?", "Yes. The deposit is generally between $250 and $400 and is due with the signed contract. It is deducted from the remaining balance."], ["When is the remaining balance due?", "The remaining balance is due at least two weeks before the event. Payment may be made by check or through PayPal; PayPal payments beyond the deposit include a 3% fee."], ["Will there be travel expenses?", "Travel is free within 25 miles of the Charleston metro area. Beyond 25 miles, a travel fee of $1 per mile per musician applies."], ["What if I cancel?", "Cancellations within five days of booking receive a full refund. After that, the deposit is nonrefundable but may be applied to another musical event within 24 months."], ["What if the venue requires insurance?", "If the venue requires liability insurance, an additional $120 applies for a day-of-event policy."]] },
];
