module.exports.handler = async (event, context) => {
  const { greeting } = require(`./vcard.vcf`);

  return {
    statusCode: 200,
    body: greeting
  };
};

