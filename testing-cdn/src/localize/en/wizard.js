const wizard = {
  drone: {
    addDrone: 'Add another Drone',
    addFirstSensor: 'and add your first sensor.',
    addSensorButton: 'Add a Sensor',
    droneManufacturer: 'Drone Manufacturer',
    droneModel: 'Drone Model',
    sideInfoDefault: 'Add at least one drone to your account. Once you’re set up, you can add and update your drones on the Coverage page.',
    sideInfo: 'You can add and update your drones on the Coverage page.',
    FAARegistrationNumber: 'FAA Registration Number',
    title: 'Add your Drone(s)',
    yearManufactured: 'Year Manufactured',
    viewDrones: 'View Drones',
    moveForward: 'You can move forward and add your Sensors and Ground Equipment or go straight to Adding Coverage to your Drone(s).',
    addYourDrone: 'Add your %{number} of %{fleetSize} drones',
    droneSuccess: '%{count} drone was successfully saved. <br/> Just %{number} more to go!',
    droneLast: 'Your %{count} and last required drone <br/> was successfully saved.',
  },
  equipment: {
    addEquipment: 'Add more Equipment',
    allSet: 'Now that you are all set',
    description: 'Description',
    getYouCovered: 'let\'s get you covered.',
    manufacturer: 'Ground Equipment Manufacturer',
    model: 'Ground Equipment Model',
    sideInfo: 'Adding ground equipment is optional. You can always manage your ground equipment later on the Coverage page.',
    title: 'Add Ground Equipment',
    viewEquipment: 'View Equipment',
  },
  ToolTipInsured: 'The Insured Value may be used to determine the amount the insurer may pay in the event your asset is deemed to be a total loss (subject to the deductible and policy terms and conditions).',
  insuredValue: 'Insured Value',
  leased: 'Leased (or hired in)',
  leaseName: 'Lease name',
  leaseLength: 'How long is your lease?',
  lessThanSixMonth: 'less than 6 months',
  moreThanSixMonth: '6 months or more',
  lienholderName: 'Lienholder name',
  loan: 'Lienholder/Lessor',
  moveForward: 'You can move forward and add your Sensors and Ground Equipment or go straight to Adding Coverage to your Drone(s).',
  skipToDashboard: 'Skip and take me to my Dashboard',
  skipThisStep: 'Skip this step',
  optional: '(Optional)',
  pilot: {
    accident: 'In the last 3 years has the pilot been involved in any aircraft or UAS accidents or pilot incidents?',
    addDroneButton: 'Add a Drone',
    addFirstDrone: 'and add your first drone.',
    addPilot: 'Add another Pilot',
    commercialPilot: 'Commercial Pilot',
    cert_part107: 'Remote Pilot / Part 107',
    cert_333_exemption: '333 Exemption',
    cert_private: 'Private Pilot',
    cert_commercial: 'Commercial Pilot',
    cert_none: 'None',
    errorPilot: 'Must have at least 1 pilot with Remote Pilot / Part 107 for policy',
    firstName: 'Pilot\'s First Name',
    flightHours: 'How many Drone Flight Hours does the pilot have?',
    government_entity: 'Flying for Government Entity',
    lastName: 'Pilot\'s Last Name',
    medical: 'Does the pilot have any medical waivers other than corrective lenses or color blindness?',
    onePilotOnePolicy: 'Pilots listed on your policy are required to have at least one of the following certifications.',
    governmentEntities: 'Government entities with a Public Use Certificate of Waiver or Authorization (COA) for UAS operations may self-certify its drone pilots, provided they follow all rules under Part 107 of the Federal Aviation Regulations, that are not waived by the COA.',
    privatePilot: 'Private Pilot',
    pilotLicense: 'Does the pilot hold a Pilot\'s License?',
    selectCertification: 'Please select at least one of the Certification(s)',
    selectLicense: 'Please select at least one license.',
    selectTraining: 'Please select at least one of the Training(s)',
    sideInfo1: 'You can manage your pilots and update their experience and certifications.',
    sideInfoDefault: 'Tell us a little bit about your pilot(s). Once you\'re set up you can manage your pilots and update their experience and certifications.',
    title: 'Add your Pilot',
    training: 'Has the pilot completed any formal drone training?',
    whichCertification: 'Which Certification(s) does this pilot hold?',
    whichTraining: 'Which training program has the pilot completed?',
    violation: 'In the last 3 years, has the pilot been cited for violation of any FAA Regulations, or had his/her pilot\'s or driver\'s license suspended or been convicted of driving while intoxicated or of any felony charges?',
    pilotMoveForward: 'Now you can move forward',
    priorClaimHistoryMessage: 'Due to your previous accidents or incidents you will be <br />required to <span style="color:#89d313;font-weight:bold;">insure at least %{number} drones</span> to create your policy.',
    viewPilots: 'View Pilots',
  },
  profile: {
    profileHeader: 'Profile Set up',
    nameChoiceInfo: 'This will be the name on the policy and cannot be changed once the policy is purchased.',
    regulatoryReasons: 'For regulatory reasons, your primary address must be a physical address (i.e., not a P.O. Box).',
    alternativeAddress: 'Would you like to designate an alternate address for physical mail?',
    useABusinessName: 'Use a Business Name',
    whenIncidentOccured: 'When did your accident or <br /> incident occur?',
    incidentIncluded: 'The accident or incident included: (select all that apply)',
    liabilityQuestion: ' <b>Third party liability damage</b> to property or people.',
    liabilityClaims: 'In the last 3 years, has your company been involved in any drone accidents or incidents?',
    amountOver10k: 'Was the total amount paid out for the claim more then $10,000?',
    physicalDamageQuestion: 'A Physical Loss or Damage Insurance Claim',
    physicalClaims: 'Was the total amount paid out for the claim more then $250?',
    moreThanOneAccident: 'More then one accident or incident?',
    addPilotDrone: 'Let\'s add your pilot and drone.',
    addPilotButton: 'Add a Pilot',
    claimLast3: 'Have you had any claims in the last 3 years?',
    howManyAccidents: 'How many accidents or incidents?',
    honestyPledge: 'By checking this box, I agree that all details I provide about my claims history are honest, true, and accurate.',
    claimsTotal: 'What was the total amount paid out for claims?',
    lessThen10000: 'Less then $10,000',
    moreThen10000: '$10,000 or more',
    fleetSize: 'Fleet Size',
    historicalFleetSize: 'What was your size of your Drone Fleet during the previous 3 years?',
    addAnother: 'Add another',
    companyRevenue: 'What is your company\'s annual revenue?',
    companySize: 'What is the size of your company?',
    lessThan10: 'Less than 10 employees',
    lessThan2mil: 'Less than $2 million',
    moreThan2mil: 'More than $2 million',
    moreThan10: 'More than 10 employees',
    businessAddress1: 'Principal Business Address',
    businessAddress2: 'Principal Business Address 2',
    businesssName: 'Business Name',
    operateAs: 'If you operate under a different name than your %{additional}:',
    doingBusinessAs: '%{additional} Doing Business as (DBA)',
    addDoingBusinessAs: 'Add your Doing Business as (DBA) name',
    enterMailingAddress: 'Please enter a valid mailing address below',
    businessPhone: 'Business Phone',
    personalAddress1: 'Principal Residence Address 1',
    personalAddress2: 'Principal Residence Address 2',
    mailingAddress1: 'Mailing Address',
    mailingAddress2: 'Mailing Address 2',
    phoneNumber: 'Phone Number',
    personalHasClaim: 'In the last 3 years, have you been involved in any drone accidents or incidents that resulted in third party liability damage to property or people?',
    profileOptionsTitle: 'Choose the Name Insured for your policy',
    profileSetup: 'Now that your profile is set up.',
    sideInfo: 'Setting up your profile is quick and easy. Once your account is set up, you can update your profile information on the profile page.',
    title: 'Profile Set up',
    thisBusinessAcc: 'Use a business name',
    whyInfoNeeded: 'Why is this information needed?',
    whyInfoNeeded2: 'This helps us understand our customer base better, so we offer products and services that will fit your business.',
    redState: {
      thanksForYourInterest: 'Thanks for your interest in <a href="http://www.droneinsurance.com">DroneInsurance.com</a>.',
      unableToOfferCoverage: 'Unfortunately we’re not able to sell insurance in your state yet. We’ll keep you posted with our changes and let you know when we’re available in your state',
      tryNextTime: 'We strive to provide a wide range of coverage options and may be able to offer you coverage in the near future.',
      callUsAt: 'If you have any questions, please call our support team at 1-800-844-6208 or start a chat.',
    },
    blocked: {
      paragraph01: 'Due to your previous accidents or incidents, pricing for your commercial drone operations is not available at this time.',
    },
    ofac: {
      failed: 'This individual/corporation requires additional approval before it can be added to the system.',
      contactUs: 'Please <a href="#intercom">contact us</a> if you wish to discuss this matter further.',
    },
    selectSuggestedAddress: 'Please update the address or select a suggested address below.',
    suggested: 'SUGGESTED',
    unableToVerifyAddress: 'We are unable to verify this address.',
    useThisAddress: 'Use this address',
    unknownAddress: 'UNKNOWN ADDRESS',
    yourEntry: 'YOUR ENTRY',
  },
  returnCoverage: 'Return to Coverage Overview',
  returnPilot: 'Return to Pilots',
  saved: 'was successfully saved.',
  sensor: {
    addEquipmentButton: 'Add Equipment',
    addFirstEquipment: 'and add your first ground equipment.',
    addSensor: 'Add another Sensor',
    manufacturer: 'Sensor Manufacturer',
    model: 'Sensor Model',
    sideInfoDefault: 'Adding Sensors is optional. You can always manage sensors later on the Coverage page.',
    title: 'Add your Sensor(s)',
    message: 'Sensors which are non-removable part of the drone or pre-installed by the aircraft manufacturer should not be added to the policy seperately.',
    viewSensors: 'View Sensors',
    moveForward: 'You can move forward and add your Ground Equipment or go straight to Adding Coverage to your Drone(s).',
    blocked: 'Unfortunately, due to the length of your lease we are not able to provide coverage for your sensor.',
  },
  serialNumber: 'Serial Number',
  coverage: {
    title: 'Select the Drones to add Coverage to',
    sideInfoDefault: 'Adding Coverage to your drone(s) is easy. Please select the drones you would like to add Coverage to.',
    selectDrone: 'Please select at least one drone',
    selectAll: 'Select All',
    unselectAll: 'Unselect All',
    addCoverage: 'Select and add Coverage to at least %{number} drones',
  },
};

export default wizard;
