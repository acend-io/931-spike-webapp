const claims = {
  authoritiesInvolved: 'Authorities Involved',
  authoritiesDescription: 'Authorities Description',
  back: 'Back to Claims',
  downloadPDF: 'Download PDF',
  single: 'Claim',
  removeClaimDraft: 'Remove draft',
  details: 'Claim Details',
  date: 'Claim Date',
  injury: 'Injury',
  injuryDescription: 'Injury Description',
  lossDate: 'Date of Damage/Loss',
  lossTime: 'Time of Damage/Loss',
  incidentDescription: 'Incident Description',
  propertyDamaged: 'Property Damaged',
  propertyDamagedDescription: 'Property Damaged Description',
  weather: 'Weather',
  acknowledge: {
    checkbox: 'I acknowledge that providing false inforamtion something something',
    done: 'Start Claim Process',
  },
  flightCoverage: {
    title: 'Scheduled Flight Coverage Details',
    period: 'Coverage Period',
    industry: 'Industry',
    additionalInsured: 'Additional Insured',
    liability: 'Liability Coverage',
    drones: 'Drone(s)',
  },
  pilot: {
    title: 'Pilot Involved',
    name: 'Name',
    training: {
      title: 'Training',
    },
    zipCode: 'Zip Code',
    certificates: {
      title: 'Pilot Certificates',
      commercial: 'Commercial',
      private: 'Private',
    },
    flightHours: 'Commercial Flight Hours',
    accident: 'In the last 3 years, have you been involved in any aircraft or UAS accidents or pilot incidents?',
    medicalWaiver: 'Do any of the pilots named have any medical waivers other than corrective lensses or color blindness?',
    violation: 'In the last 3 years, have any of the pilots named above been cited for violation of any FAA Regulations, or had their pilot’s licence suspended or been convinced of driving while intoxicated or any felony charges?',
  },
  honestyDeclaration: 'By signing this, I promise that every detail I provide about my claim is honest, true, and accurate.',
  item: {
    model: 'Model',
    value: 'Insured Value',
    serialNumber: 'Serial Number',
    manufacturer: 'Manufacturer',
  },
  drone: {
    title: 'Drone(s) Involved',
    registrationNumber: 'FAA Registration Number',
    type: 'Drone Type',
    year: 'Manufactured Year',
    option_1: 'Base',
    option_2: 'Base & Hull',
  },
  groundEquip: {
    title: 'Ground Equipment(s) Involved',
    type: 'Type',
    description: 'Description',
  },
  sensor: {
    title: 'Sensor(s) Involved',
    type: 'Type',
  },
  eSignature: {
    help: 'Click above the line to electronically sign the claims honesty pledge',
    apply: 'Apply Signature',
  },
  header: 'Claims',
  disclaimer: {
    thirdParty: 'Liberty Specialty Markets has appointed a third-party administrator, McLarens, to review all claims. You should expect to hear from them shortly after you submit your claim details through \n%{website}.',
    questions: 'If you have any questions regarding the claims submission process, feel free to chat with us, email us at %{supportEmail}, call us at %{phoneNumber} or check out the Help section.',
  },
  uploadedFiles: {
    title: 'Uploaded Files',
    logs: 'Flight Logs',
    images: 'Survey Images',
  },
  newClaim: 'File a New Claim',
  refNumber: 'Ref Number',
  status: {
    header: 'Status',
    submitted: 'Submitted',
  },
  chat: {
    sorry: 'Sorry that something went wrong.\nLet me ask you a few questions to get the ball rolling.',
    when: {
      question: 'When did the incident occur?',
      pick: 'Select date and time of incident',
      invalid: 'Date cannot be in the future',
    },
    hurt: {
      question: 'Was anyone hurt?',
      explain: 'Please explain.',
    },
    property: {
      question: 'Was any property damaged?',
      explain: 'Please tell us what happened.',
    },
    authorities: {
      question: 'Were the authorities involved?',
      explain: 'Please describe who was involved.',
    },
    flight: {
      question: 'Was this related to a flight?',
      pilot: 'Who was the pilot in command?',
      weather: 'Please tell us about the weather on the day of the incident.',
      images: {
        question: 'Do you have images captured during the flight?',
        upload: 'Please upload the images you captured during the flight to help expedite your claim.',
      },
      logs: {
        question: 'Do you have logs from the flight?',
        upload: 'Please upload the logs from the flight to help expedite your claim.',
      },
    },
    sensors: {
      question: 'Was a sensor involved?',
      pick: 'Which sensor(s) was involved?',
    },
    drones: {
      question: 'Was a drone involved?',
      pick: 'Which drone(s) was involved?',
    },
    groundEquip: {
      question: 'Was ground equipment involved?',
      pick: 'What ground equipment was involved?',
    },
    details: 'Please provide as much detail about what happened as you can.',
    input: {
      upload: 'Select files to upload...',
    },
    submit: 'Submit Claim',
    success: {
      submitted: 'Your Claim was successfully submitted.',
      detailsPage: 'You will receive an email with the details of your Claim, and you can view the details on the Claims page.',
      goToClaim: 'Go to Claim Overview',
    },
  },
};

export default claims;
