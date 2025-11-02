import Title from '@/components/Title';
import { Timeline } from '@/components/ui/timeline';
import { ProductsProcessContent } from '@/constants/content';
import React from 'react';

function ProductsProcess() {
  return (
    <section>
      <Title
        description="আমাদের পণ্য প্রক্রিয়া সম্পর্কে জানুন"
        popupTitle="process"
        title="পণ্য প্রক্রিয়া"
      />
      <div className="relative w-full overflow-clip">
        <Timeline data={ProductsProcessContent} />
      </div>
    </section>
  );
}

export default ProductsProcess;
