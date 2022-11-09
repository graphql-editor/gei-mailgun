type IntegrationData = {
  name: string;
  description: string;
  value: string | string[];
  required?: boolean;
};

type IntegrationSpecification = {
  [resolver: string]: {
    name: string;
    description: string;
    data: Record<string, IntegrationData>;
    resolve: { name: string };
  };
};

// Declare your resolver specifications here to generate JSON from it later using `gei integrate` command
const integration: IntegrationSpecification = {
  'Mutation.send': {
    name: 'Send email message',
    description: 'Send email message using mailgun',
    resolve: {
      name: 'lib/Mutation/send',
    },
    data: {},
  },
};

export default integration;
