export const mockContactSubmission = async (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Mock contact submission:', formData);
      resolve({ success: true, data: formData });
    }, 1000);
  });
};

export const mockData = {
  impactStats: {
    wasteDiverted: 45000,
    emissionsReduced: 12500,
    energyGenerated: 8500,
    corporatePartners: 150
  },
  services: [
    {
      id: 1,
      name: 'Accelerated Anaerobic Composting (AAC)',
      description: 'Advanced composting technology transforming organic waste into nutrient-rich compost'
    },
    {
      id: 2,
      name: 'Anaerobic Gas Lift Reactor (AGR)',
      description: 'Biogas generation system converting organic waste into renewable energy'
    },
    {
      id: 3,
      name: 'Pyrolysis Technology',
      description: 'Thermal decomposition converting plastic waste into valuable fuel oil'
    },
    {
      id: 4,
      name: 'Alternative Fuel & Raw Material (AFRF)',
      description: 'Converting non-recyclable waste into high-calorific alternative fuel'
    }
  ]
};