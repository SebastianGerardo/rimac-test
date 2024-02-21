import PropTypes from 'prop-types'

export const Steps = ({ currentStep, steps }) => {
  return (
    <article className="font-lato flex justify-center items-center bg-neutrals-200 py-4">
      {steps && steps.length > 0 && steps.map((step, index) => (
        <article className='flex items-center' key={index}>
          <div className={`flex gap-3 items-center ${currentStep !== index && 'text-neutrals-600'}`}>
            <div className={`w-6 h-6 rounded-full text-center ${currentStep !== index ? "border border-neutrals-600" : "bg-blueBerry text-white"}`}>
              <h4>{index + 1}</h4>
            </div>
            <h4>{step}</h4>
          </div>

          {steps.length - 1 !== index && (
            <div className="flex gap-1 mx-4">
              <div className="w-[6px] h-1 bg-blueBerry rounded-3xl" />
              <div className="w-[6px] h-1 bg-blueBerry rounded-3xl" />
              <div className="w-[6px] h-1 bg-blueBerry rounded-3xl" />
              <div className="w-[6px] h-1 bg-blueBerry rounded-3xl" />
            </div>
          )}
        </article>
      ))}
    </article>
  );
};

Steps.propTypes = {
  steps: PropTypes.array.isRequired,
  currentStep: PropTypes.number.isRequired,
}