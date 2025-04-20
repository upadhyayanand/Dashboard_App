export const initialDashboardData = {
  categories: [
    {
      id: 'cspm-executive-dashboard',
      name: 'CSPM Executive Dashboard',
      widgets: [
        {
          id: 'cloud-accounts',
          name: 'Cloud Accounts',
          type: 'doughnut',
          total: 2,
          data: {
            labels: [`Connected`, 'Not Connected'],
            datasets: [{
              data: [2, 2],
              backgroundColor: ['#4299e1', '#e2e8f0'],
              borderWidth: 0,
              spacing: 1,
              hoverOffset: 5
            }],
          },
          options: {
            cutout: '65%',
            plugins: {
              legend: {
                display: false,
              },
            },
          },
        },
        {
          id: 'cloud-account-risk',
          name: 'Cloud Account Risk Assessment',
          type: 'doughnut',
          total: 9659,
          data: {
            labels: ['Failed', 'Warning', 'Not available', 'Passed'],
            datasets: [{
              data: [1689, 681, 36, 7253],
              backgroundColor: ['#b11111', '#fdd94b', '#aaa', '#48bb78'],
              borderWidth: 0,
              spacing: 1,
              hoverOffset: 5
            }],
          },
          options: {
            padding: '',
            cutout: '65%',
            plugins: {
              legend: {
                display: false,
              },
            },
          },
        },
      ]
    },
    {
      id: 'cwpp-dashboard',
      name: 'CWPP Dashboard',
      widgets: [
        {
          id: 'namespace-alerts',
          name: 'Top 5 Namespace Specific Alerts',
          type: 'unknown',
          data: {},
          options: {}
        },
        {
          id: 'workload-alerts',
          name: 'Workload Alerts',
          type: 'unknown',
          data: {},
          options: {}
        },
      ]
    },
    {
      id: 'registry-scan',
      name: 'Registry Scan',
      widgets: [
        {
          id: 'image-risk',
          name: 'Image Risk Assessment',
          type: 'horizontalBar',
          title: 'Total Vulnerabilities',   // 1470
          data: {
            total: 1470,
            labels: ['Critical', 'High', 'Medium', 'Low'],
            datasets: [{
              data: [9, 150, 490, 695],
              backgroundColor: ['#a11111', '#e21212', '#ed8936', '#fdd94b'],
            }],
          },
        },
        {
          id: 'image-security',
          name: 'Image Security Issues',
          type: 'horizontalBar',
          title: 'Total Images',   // 2
          data: {
            total: 8,
            labels: ['Critical', 'High', 'Medium', 'Low'],
            datasets: [{
              data: [2, 2, 2, 1],
              backgroundColor: ['#a11111', '#e21212', '#ed8936', '#fdd94b'],
            }],
          },
        },
      ]
    },
    // TODO - other dummy data will be added as text dynamically by the user input
  ]
};