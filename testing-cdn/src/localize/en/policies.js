const policies = {
  noActivePolicy: 'This account has no active policies.',
  overview: 'Overview',
  documents: 'Documents',
  certificates: 'Certificates of Insurance',
  backToPolicies: 'Back to Policies',
  flightCoverageCoi: 'Flight Coverage <br> Certificates of Insurance',
  selectCOI: 'Select Certificate(s) of Insurance',
  newPolicy: 'New Policy',
  upcomingPolicy: 'Upcoming Policy',
  effectiveDate: 'Effective Date',
  coi: 'Select and Download Certificate of Insurance >',
  additionalInsured: 'Learn how to add an Additional Insured >',
  currentPolicy: 'Current Policy',
  cancellationDate: 'Cancellation Date',
  cancellationType: 'Cancellation Type',
  renewOn: 'Your policy will renew on %{renewalDate}.',
  renewalDate: 'Renewal Date',
  tipAdditionalInsured: 'Tip "How to add an Additional Insured?":',
  tipDetails: 'Select the "Certificate of Insurance" tab. Under chosen Flight Coverage Certificate, click on the “Select Certificate(s) of Insurance", and then click on the "Add Additional Insured."',
  endorsements: {
    endorsements: 'Endorsements',
    endorsementType: 'Endorsement Type',
    endorsementNum: 'Endorsement no.',
    endorsementDate: 'Endorsement Date',
    showAll: 'Show All',
    assetMovement: 'Asset Movement',
    cancelledFlightCoverage: 'Cancelled Flight Coverage',
    pilotMovement: 'Pilot Movement',
    nameInsured: 'Name Insured',
  },
  cancelledUserInitiated: 'User Initiated Cancellation',
  cancelledExpired: 'Policy Expired',
  cancelledNonpayment: 'Cancellation for Non-payment',
  policyPeriod: 'Policy Period',
  renewalDatePeriod: 'Renewal Date:',
  cancelPolicy: 'Cancel Policy',
  cancelWarning: {
    title: 'Are you sure you want to cancel this Policy?',
    warning: 'warning',
    text: 'By canceling this policy you acknowledge you will lose all coverage under this insurance policy effective immediately, and you are voluntarily renouncing any coverage for all actual or potential claims (whether now known or unknown) occurring after this cancellation.',
  },
  cancelReasonTitle: 'Please tell us why you’re canceling your policy:',
  cancelReasons: {
    misunderstoodWithProduct: 'I misunderstood the product',
    productExpensive: 'This product is too expensive',
    purchasedAlternativeProduct: 'I purchased an alternative product',
    poorCustomerService: 'Poor customer service',
    noMonthlyBasecoverage: 'I do not want to continue paying for the monthly base coverage',
    insuranceNoLongerNeeded: 'I no longer need drone insurance for my business',
    unsatisfiedWithProduct: 'I am generally unsatisfied with the product',
    other: 'Other',
    preferNotAnswer: 'I prefer not to answer',
  },
  cancelFeedback: 'Your feedback matters. Is there anything else you’d like us to know?',
  coverage: {
    thirdParty: 'Third Party Liability in respect of Aircraft, Flight Equipment & Sensors and Ground Equipment while not in Flight%{colon}',
    bodily: {
      name: 'Bodily Injury and Property Damage',
      value: '$1,000,000 each Aircraft/each occurrence',
    },
    personal: {
      name: 'Personal & Advertising Injury',
      value: '$1,000,000 each Aircraft/each occurrence and in the annual aggregate',
    },
    premises: {
      name: 'Premises Liability Extension',
      value: '$1,000,000 each Aircraft/each occurrence',
    },
    medical: {
      name: 'Medical Expenses',
      value: '$5,000 any one person',
    },
    war: {
      name: 'War, Hi-Jacking and Other Perils Limited Liability Write-Back',
      value: '$1,000,000 each Aircraft/each occurrence and in the annual aggregate',
    },
    tria: {
      name: 'TRIA Liability Coverage',
      value: '$1,000,000 each Aircraft/each occurrence',
    },
  },
};

export default policies;
