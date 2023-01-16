import { motion } from 'framer-motion';
import { useForm } from "react-hook-form";
//
import { SelectedPage } from '@/shared/types';
//
import { HomeProps } from '../Home';
//
import { HText } from '@/shared/HText';
//
//
//
//
//
//
interface ContactUsProps extends HomeProps { }
//
export const ContactUs = ({ setSelectedPage }: ContactUsProps) => {
  //
  //
  const {
    register,
    trigger,
    formState: { errors }
  } = useForm()
  //

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  }
  return (
    <section
      id='contactus'
      className='mx-auto w-5/6 pt-24 pb-32'>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
        {/* header */}
        <motion.div
          className='md:-mt-20'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <HText>
            <span className='text-primary-500'>Join Now</span> To Get It
          </HText>
          <p className='my-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor vero corrupti ut illo asperiores. Labore odio quam consequuntur iusto non, quisquam omnis accusamus placeat modi optio vero nihil autem quis.</p>
        </motion.div>
        {/* form & image */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className='mt-10 basis-3/5 md:mt-0'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 }
            }}>
            <form
              target='_blank'
              onSubmit={onSubmit}
              method='POST'
              action="https://formsubmit.co/bobrrrdobrrr@gmail.com">
              <input
                type="text"
                placeholder='Name'
                className='mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white'
                {...register('name',
                  {
                    required: true,
                    maxLength: 50,
                  })}
              />
              {errors.name && (
                <p className='mt-1 text-primary-500'>
                  {errors.name.type === 'required' && 'This field is required'}
                  {errors.name.type === 'maxLenght' && 'Max lenght is 50 char'}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}