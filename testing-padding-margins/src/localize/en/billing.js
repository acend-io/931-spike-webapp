const billing = {
  back: 'Back to Billing and Payments',
  common: {
    billedTo: 'Billed to',
    creditCardEnding: 'Credit Card ending in',
    customerNumber: 'Customer No:',
    flightCoverage: 'Flight Coverage',
    baseCoverage: 'Base Coverage',
    geCoverage: 'Ground Equipment Coverage',
    insuredValue: 'Insured value',
    invoiceDate: 'Invoice Date:',
    invoiceNumber: 'Invoice Number:',
    oneTimePayment: 'One time payment',
    paymentTerms: 'Payment Terms:',
    policyNumber: 'Policy No:',
    amountRefunded: 'Amount Refunded',
    refund: '%{case}efund%{option}',
    removed: 'Removed',
    sensorCoverage: 'Sensor Coverage',
    originalCharge: 'Original Charge',
    billingAddressTitle: 'Billing Address',
    address: 'Address %{number}',
    zipCode: 'Zip code',
    billedMonthly: 'Billed monthly',
    clearSuggestion: 'clear suggestions',
    deferredBillUnpaid: 'This amount wasn\'t processed. It will be charged with your next bill.',
    deferredBillPaid: 'This amount was not charged in this purchase. It was charged on',
  },
  invoice: {
    coverageHelperText: 'Coverage will automatically renew each month until cancelled',
    deferredAmount: 'Deferred amount from',
    deferredBill: 'Deferred Bill',
    noAddress: 'No billing address provided',
    refund: {
      refund: 'Refund',
      amountRefunded: 'Amount Refunded',
      amountRetained: 'Amount Retained',
      newTotalPrice: 'New Total Price',
    },
  },
  overview: {
    amount: 'Amount',
    dateLabel: 'Date',
    endorsementNumber: 'Endorsement number',
    noActivePolicy: 'You have no active policy',
    numberLabel: 'number',
    orderHistory: 'Order History',
    orderLabel: 'Order',
    paymentError: 'We are having trouble with the credit card on file. Please update your credit card info',
    paymentLabel: 'Payment',
    nextPayment: 'Your next reoccurring payment of %{amount} (plus applicable taxes and fees) will be processed on:',
    outstanding: 'You have an outstanding balance of ',
    outstandingNotice: 'To prevent your policy from being cancelled payment must be made before prior to',
    title: 'Billing and Payments',
  },
  noAddress: 'No billing address record found',
  dashboard: {
    billingSummary: 'Billing Summary',
    updatePayment: 'Update Payment Method',
    upComingBillInfoAmount: '%{nextPayment} <br />',
    upComingBillInfo: 'Scheduled for <strong>%{nextPaymentdate}</strong>',
    lastPayedBillInfo: 'Last payment:<br /> <strong>%{lastPayment}</strong> paid on<br />%{lastPaymentdate}',
    noCharges: 'No upcoming charges.',
  },
};

export default billing;
