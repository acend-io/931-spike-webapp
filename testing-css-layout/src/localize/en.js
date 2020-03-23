import claims from './en/claims';
import coverage from './en/coverage';
import cart from './en/cart';
import policies from './en/policies';
import profile from './en/profile';
import wizard from './en/wizard';
import billing from './en/billing';
import renewals from './en/renewals';

const en = {
  claims,
  cart,
  profile,
  wizard,
  billing,
  coverage,
  policies,
  renewals,
  assetActiveSince: 'Active Since <br /> %{date}',
  eSignature: {
    label: 'eSignature',
    help: 'Click above checkbox to apply electronic signature. Your fully executed and completed Policy Cover Note and Consent to Electronic Delivery documents will be available via the “Policies” section of your account once you complete your purchase.',
  },
  dashboard: {
    myPolicy: 'My Policy Doc',
    fAQ: 'FAQ',
    addAsset: 'Add %{asset}',
    help: 'Need help? Visit our resource center',
    contact: 'Contact us: 1-800-555-5512',
    viewAll: 'View All',
    liability: '$%{amount}',
    asset: '%{asset}',
    coi: 'Certificate(s) of Insurance',
    labels: {
      quickLinks: 'Quick Links',
      support: 'Support',
      assets: 'Assets',
      flightCoverages: 'Flight Coverages',
    },
  },
  ofac: {
    individual: {
      title: 'This individual',
      submit: 'Submit as Individual',
      country: 'Country of citizenship',
      dob: 'Birthdate mm/dd/yyyy',
    },
    entity: {
      title: 'This corporation',
      submit: 'Submit as Business',
      country: 'Country of Incorporation',
    },
    failed: 'requires additional approval before being added',
  },
  nav: {
    coverage: 'Coverage',
    pilots: 'Pilots',
    policies: 'Policies',
    claims: 'Claims',
    help: 'Help',
    cart: 'Cart',
    account: 'Account',
    profile: 'Profile',
    billing: 'Billing',
    signOut: 'Sign Out',
    intercom: 'Live chat support',
    dashboard: 'Dashboard',
  },
  additionalInsured: {
    includeAddress: 'Include Address',
    backToCOIs: 'Back to Certificates of Insurance',
    addAdditionalInsured: 'Add Additional Insured',
    noAdditionalInsureds: 'No Additional Insured',
    removeAI: 'Are you sure you want to remove Additional Insured?',
  },
  account: {
    details: 'Account Details',
    policyNumber: 'Policy Number',
    phone: 'Phone Number',
    businessName: 'Business Name',
    address: 'Address',
  },
  toolTip: {
    flightCoverage: 'This is the estimated cost for Flight Coverage for the specified period of time.',
    policyRenewal: 'This is the estimated cost for Flight Coverage to be paid upon policy renewal should you choose to renew your policy and continue your flight coverage through the selected date.  This price is only an estimate, and the actual price will be calculated at renewal.  Please note that eligibility for renewal will be determined by your insurer, and this estimate in no way guarantees that any such renewal will be offered.',
    dueToday: 'This is the price you will pay today for Flight Coverage effective until the expiration of your current policy.',
  },
  common: {
    baseCoverage: 'Base Coverage',
    getYouCovered: 'Let\'s get you covered!',
    passwordDetails: 'Password must be at least 8 characters long and must contain at least one uppercase letter, one special character, and one number',
    all: 'All',
    remove: 'Remove',
    state: 'State',
    city: 'City',
    zip: 'Zip',
    name: 'Name',
    add: 'Add',
    edit: 'Edit',
    cancel: 'Cancel',
    continue: 'Continue',
    delete: 'Delete',
    drone: 'Drone',
    email: 'Email',
    equipment: 'Ground Equipment',
    goodJob: 'Good Job!',
    items: 'Items',
    next: 'Next',
    none: 'None',
    other: 'Other',
    others: 'Others',
    password: 'Password',
    save: 'Save',
    sensor: 'Sensor',
    skip: 'Skip',
    unknown: 'Unknown',
    noAssets: 'It seems you haven\'t added any %{assets} yet.',
    close: 'Close',
    ok: 'OK',
    showMore: 'Show More',
    showLess: 'Show Less',
    homepage: 'Return to Homepage',
    contactUs: 'contact us',
    pleaseWait: 'Please wait...',
    yes: 'Yes',
    no: 'No',
    expiringDate: 'Both days at 12:01 A.M. Local Standard Time at the address of the Named Insured shown on your policy.',
    typeHere: 'Type in your answer here',
    website: 'DroneInsurance.com',
    supportEmail: 'Support@DroneInsurance.com',
    phoneNumber: '800-844-6208',
    cancelCoverage: 'Cancel Coverage',
    cancelFlightCoverage: {
      confirmMsg: 'Are you sure you want to cancel this Flight Coverage?',
      refundMsg: 'Your account will be refunded: %{refundPrice}',
      warningMsg: '<b>WARNING:</b> By canceling this flight coverage, you acknowledge that this coverage will be cancelled effective immediately.',
    },
    forgotFlightCoverage: {
      dontForgetToAdd: "Don\\'t forget to add Flight Coverage before you take off!",
      flightCoverageMsg: 'One or more drones in your cart does not have coverage while in the air. To be protected while flying, you\'ll need to schedule Flight Coverage',
      continueToCartButton: 'Got it - Continue to Checkout',
      addFlightCoverageNowButton: 'Add Flight Coverage Now',
      customerServiceLink: 'Chat with Customer Service',
    },
    form: {
      cannotSaveCC: 'Sorry, we cannot save your credit card details',
      cardNumber: 'Card Number',
      cvcCvvCode: 'CVC/CVV code',
      creditCardDeclinedError: 'The credit card you provided was declined.<br />Please try paying with a different credit card.',
      creditCardExpired: 'Looks like your credit card on file has expired. Please %{updateYourCreditCard} to finalize your order.',
      updateYourCreditCard: 'update your credit card',
      expMMYY: 'Expiration MM / YY',
      nameOnTheCard: 'Name on the card',
      creditCardTrouble: 'We\'re having trouble with the credit card on file. %{updateYourCreditCard} info',
      outstandingError: 'Please note that you will be charged immediately for any outstanding balance after updating your credit card details.',
      processingError: 'There was an error while processing your payment.<br />Please try again.',
    },
    currentPolicy: 'Current policy',
    upcomingPolicy: 'Upcoming policy',
  },
  date: {
    sunday: {
      short: 'Su',
      full: 'Sunday',
    },
    monday: {
      short: 'Mo',
      full: 'Monday',
    },
    tuesday: {
      short: 'Tu',
      full: 'Tuesday',
    },
    wednesday: {
      short: 'We',
      full: 'Wednesday',
    },
    thursday: {
      short: 'Th',
      full: 'Thursday',
    },
    friday: {
      short: 'Fr',
      full: 'Friday',
    },
    saturday: {
      short: 'Sa',
      full: 'Saturday',
    },
    date: 'MMM DD, YYYY',
    custom: 'Custom',
    day: 'Day',
    days: 'Days',
    daysLC: 'days',
    dueToday: 'Due Today',
    endDate: 'End Date',
    month: 'month',
    ninetyDays: '90 Days',
    oneDay: '1 Day',
    oneYear: '1 Year',
    perDay: '/day',
    perMonth: '/month',
    startDate: 'Start Date',
    thirtyDays: '30 Days',
    today: 'Today',
    year: 'Year',
    yearFromNow: 'A year from now',
  },
  drones: {
    name: 'Drone name',
    tailNumber: 'Tail number',
    details: 'Drone Details',
    edit: 'Edit',
    remove: 'Remove',
    scheduledFlightCoverage: 'Scheduled Flight Coverages',
    pastScheduledFlightCoverage: 'Past Flight Coverages',
    cancelFlightCoverage: 'Cancel Flight Coverages',
    coverageDate: 'Coverage date',
    liabilityAmount: 'Liability Amount',
    noFlightCoverage: 'No Scheduled Flights Coverages',
    notInFlightLiabilityAmount: 'Not In Flight Liability Amount',
    certificate: 'Certificate',
    ownerTypes: {
      lease: 'Leased',
      owner: 'Owner',
      loan: 'Loan',
    },
    dialog: {
      cancelBaseCoverage: {
        title: 'Are you sure you want to cancel this coverage?',
        body: 'Canceling Base Coverage will result in the loss of ALL coverage under this insurance policy as of the date of cancellation, and you hereby acknowledge that any and all claims or losses occurring after such cancellation will not be covered by this policy. Cancelling your policy is final.  If you would like additional coverage in the future, you would need to start a new coverage common.',
        notAllowed: 'Your Policy must always have one active drone.  Please return to the previous screen and activate another drone before deleting this one.  If you wish to cancel your policy entirely, please visit the Policy page and follow the on-screen queues. ',
      },
      removeTitle: 'Are you sure you want to remove this drone?',
      removeBody: 'Are you sure you want to delete this drone from DroneInsurance.com?',
      addCoverageToOneDrone: 'To complete checkout you will need to add Coverage for at least one Drone. ',
      selectNewDrone: 'Remove and select a new Drone from your Coverage screen',
      cancelFlightCoverageTitle: 'Are you sure you want to cancel these coverage(s)?',
      cancelFlightCoverageBody: '<b>WARNING:</b> By canceling these coverage(s) you acknowledge that this drone will lose all coverage(s) under this insurance policy effective immediately, and you are voluntarily renouncing your right to file a claim for any known or unknown incidents that may have happened while this drone was insured under this policy.',
    },
  },
  equipment: {
    details: 'Ground Equipment Details',
  },
  sensor: {
    details: 'Sensor Details',
  },
  sensors: {
    sensorType: 'Sensor Type',
    types: {
      chemical: 'Chemical',
      hyperspectral: 'Hyperspectral',
      infraredThermal: 'Infrared/Thermal',
      lidar: 'Lidar',
      magnetometer: 'Magnetometer',
      multispectral: 'Multispectral',
      visual_camera: 'Visual Camera',
    },
  },
  groundEquip: {
    equipmentType: 'Ground Equipment Type',
    types: {
      droneRemote: 'Drone Remote / Communicator',
      sensorRemote: 'Sensor Remote / Communicator',
      laptopTablet: 'Laptop / Tablet',
      groundStation: 'Ground Station',
      audioVideo: 'Audio / Video (non-camera) Equipment',
      dataStorage: 'Data Storage',
    },
  },
  pilots: {
    active: 'Active',
    inactive: 'Inactive',
    notActive: 'Not active',
    show: 'Show',
    status: 'Status',
    remove: 'Remove Pilot',
    pilot: 'Pilot',
    edit: 'Edit Pilot',
    fullName: 'Pilot Name',
    certification: 'Certification',
    license: 'License',
    flightHours: 'Commercial Flight Hours',
    removeMessage: 'Your rates can vary based on the experience of your pilots.',
    changeStatus: 'Change Status',
    activeSince: 'Active since',
    backToPilots: 'Back to Pilots',
    pilotEditHelp: 'If pilot name is not listed or is incorrect, use Add Pilot to add the appropriate pilot name.',
    pilotsActiveSince: 'Active Since <br /> %{date}',
    viewPilots: 'View Pilots for',
    dialog: {
      remove: {
        title1: 'Are you sure you want to remove a pilot?',
        title2: 'Are you sure you want to remove the selected pilots?',
        body1: 'This will remove this pilot from your Policy.',
        body2: 'This will remove the selected pilots from your Policy.',
        body3: 'Your policy must always have one active Pilot In Command. Please return to the previous screen and activate another pilot before deleting this one.',
      },
      warning: {
        title: 'This Pilot is active on your policy.',
        body: 'You must remove this pilot from your policy before you can remove.',
      },
      deactivateWarning: {
        title: 'You must have at least one active Pilot.',
        body: 'Your Policy must always have one active Pilot In Command. Please return to the previous screen and activate another pilot before deleting this one. If you wish to cancel your policy entirely, please visit the Policy page and follow the on-screen cues.',
      },
    },
  },
  forgotPassword: {
    alertError: 'If an account exists you will receive an email',
    reset: 'Reset Password',
    subtitle: 'Enter your email address below and we\'ll get you back on track.',
    title: 'Forgot your password?',
  },
  login: {
    createAccount: 'Create account',
    contactDI: 'To do so, contact DroneInsurance.com at <a href="mailto:%{supportEmail}">%{supportEmail}</a> or <a href="tel:%{phoneNumber}">%{phoneNumber}</a>',
    forgotPassword: 'Forgot Password?',
    keepMeLoggedIn: 'Keep me logged in',
    language: 'Language',
    login: 'Login',
    loginSeparate: 'Log In',
    oauthReminder: 'You may disconnect your DroneInsurance.com account from the %{partnerText} application at any time.',
    partnerLoginText: 'to DroneInsurance.com to sync your insurance<br />information inside %{partner}',
    partnerConnect: 'Do you want to display your DroneInsurance.com information inside %{partnerText}?',
    welcome: 'Welcome Back',
  },
  partner: {
    airmap: 'AirMap',
    measure: 'Measure Ground Control',
  },
  newPassword: {
    alertError: 'Error trying to reset password.',
    confirmPassword: 'Confirm your Password',
    newPassword: 'New Password',
    setPassword: 'Set new password',
    title: 'Please enter your new password',
  },
  signUp: {
    agree: 'I have read and agree to the',
    and: 'and',
    createPassword: 'Create a Password',
    goTo: 'Go To',
    login: 'Log In',
    page: 'Page',
    policy: 'Privacy Policy',
    signUp: 'Get Started',
    tos: 'Terms of Use',
    news: 'Sign me up to recieve product and industry news.',
    heading: 'Sign up and get pricing in minutes',
    baseCoverage: 'BASE COVERAGE',
    baseCoverageDetails: 'Coverage for your business while not in the air.',
    flightCoverage: 'ON-DEMAND FLIGHT LIABILITY COVERAGE',
    flightCoverageDetails: 'Choose the amount of Flight Coverage and when you need it.',
    optional: 'Optional',
    physicalDamage: 'PHYSICAL DAMAGE PROTECTION',
    legalNotice: 'Insurance services are provided by Acend Insurance Solutions, LLC through the surplus lines market.',
  },
  validation: {
    alphaNumeric: 'Only alphanumeric characters',
    emailAlreadyExisted: 'This email is already existed',
    name: 'Please enter a valid name',
    characters: 'characters',
    date: 'Invalid date',
    lessThan3Years: 'Claim should be within the last 3 years',
    greaterThan3Years: 'Claim cannot be for a future date',
    dob: 'Please provide a valid date',
    exactly: 'Exactly',
    creditCard: 'Invalid credit card expiry date, must be in format MM/YY',
    email: 'Invalid email address',
    endDate: 'End Date must be before a year from today',
    failCodeRequest: 'Failed to request new code',
    failVerifyCode: 'Failed to verify code',
    greaterThanZero: 'Must be greater than zero',
    invalidCredentials: 'Invalid Credentials',
    invalidEndDate: 'End date must be later than start date',
    incorrectEmailPassword: 'Your email or password is incorrect.',
    incorrectPassword: 'Your password is incorrect.',
    maximum: 'Must be less than or equal to',
    minimum: 'Must be at least',
    number: 'Must be a number',
    required: 'This is required',
    resendVerification: 'Your email is not confirmed. You will be redirected to verification page. Please press Resend to get new verification code.',
    phoneNumber: 'Invalid phone number. Phone number format eg: 000-000-0000',
    password: 'Passwords must contain at least one upper case letter, one special character, and one number.',
    priceInteger: 'Invalid value',
    samePassword: 'Confirm password must be same with password',
    todaysDate: 'Date must be today or in the future',
    createOfacFail: 'OFAC status unknown',
    yearRange: 'Must be between 2000 and current year',
    zipCode: 'Invalid zip code',
  },
  verification: {
    checkEmail: 'Check your email',
    checkSpam: 'Didn\'t receive the code?<br />Check spam or bulk folders for a message coming from:<br />account-noreply@droneinsurance.com',
    enterSignInCode: 'Enter the sign-in code we sent to',
    resend: 'Resend',
    sending: 'Sending',
    sent: 'Sent',
    verificationCode: 'Verification Code',
    verify: 'Verify',
    errors: {
      codeInvalid: 'Incorrect verification code',
      codeExpired: 'Verification code expired',
    },
  },
  smartyStreet: {
    invalidMessage: 'Invalid Address',
    certifyMessage: 'Use as it is',
  },
};

export default en;
